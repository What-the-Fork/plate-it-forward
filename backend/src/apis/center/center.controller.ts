import {Request, Response} from 'express'
import {
    PartialCenter,
    Center,
    selectPartialCenterByCenterId,
    selectWholeCenterByCenterId,
    updateCenter, selectAllPartialCenters, selectCenterByPartnershipRestaurantId
} from '../../utils/models/Center'
import {Status} from '../../utils/interfaces/Status'
import {Restaurant, selectRestaurantsByPartnershipCenterId} from "../../utils/models/Restaurant";

// Controller for UPDATE of Community Center
export async function putCenterController(request: Request, response: Response): Promise<Response> {
    try {
        // grabbing entire center by center id parameters for body request
        const {centerId} = request.params
        const {
            centerAddress,
            centerContactEmail,
            centerContactName,
            centerContactPhone,
            centerDirectoryImgUrl,
            centerLat,
            centerLng,
            centerName,
            centerPhone,
            centerProfileImgUrl,
            centerWebsiteUrl
        } = request.body
        const center = request.session.center as Center
        const centerIdFromSession = center.centerId as string

        // this update establishes updated centers in center table
        const performUpdate = async (partialCenter: PartialCenter): Promise<Response> => {
            const previousCenter: Center = await selectWholeCenterByCenterId(partialCenter.centerId as string) as Center
            const newCenter: Center = {...previousCenter, ...partialCenter}
            await updateCenter(newCenter)
            return response.json({status: 200, data: null, message: 'Profile successful updated'})
        }
        // returns error if no center exists
        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }

        return centerId === centerIdFromSession
            ? await performUpdate({
                centerId,
                centerAddress,
                centerContactEmail,
                centerContactName,
                centerContactPhone,
                centerDirectoryImgUrl,
                centerLat,
                centerLng,
                centerName,
                centerPhone,
                centerProfileImgUrl,
                centerWebsiteUrl
            })
            : updateFailed('You are not allowed to perform this action')
    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getCenterByCenterId(request: Request, response: Response): Promise<Response> {
    try {
        // grabbing partial center information for front end users
        const {centerId} = request.params
        const postgresResult = await selectPartialCenterByCenterId(centerId)
        const data = postgresResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function getAllCenters(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPartialCenters()
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getCenterByPartnershipRestaurantId (request: Request, response: Response): Promise<Response> {
    try {
        console.log('i made it here')
        // 95-99 not letting the end user tell us who they are
        const restaurant = request.session.restaurant as Restaurant
        const restaurantIdFromSession = restaurant.restaurantId as string
        if (!restaurantIdFromSession) {
            return response.json({status: 400, data: null, message: "you are not signed in as a restaurant"})
        }
        const postgresResult = await
            selectCenterByPartnershipRestaurantId(restaurantIdFromSession)
        const data = postgresResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message }))
    }
}