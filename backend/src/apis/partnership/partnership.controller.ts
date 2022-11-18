import { NextFunction, Request, Response} from "express"
import { Status } from '../../utils/interfaces/Status'
import { Center } from '../../utils/models/Center'
import { Restaurant} from "../../utils/models/Restaurant"
import {
    selectPartnershipByPartnershipCenterId,
    selectPartnershipByPartnershipRestaurantId,
    insertPartnership,
    Partnership,
    selectPartnershipByPrimaryKey,
    updatePartnership
} from "../../utils/models/Partnership"

export async function postPartnership(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {partnershipCenterId} = request.body
        if (request.session.restaurant === undefined) {
            throw new Error('you are not logged in')
        }
        const restaurant: Restaurant = request.session.restaurant
        const partnershipRestaurantId: string = restaurant.restaurantId as string


        const partnership: Partnership = {
            partnershipCenterId,
            partnershipRestaurantId,
            partnershipApproved: true
        }
        const result = await insertPartnership(partnership)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error: any) {
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}

export async function putPartnership (request: Request, response: Response): Promise<Response> {
    console.log(putPartnership)
    try {
        const {partnershipCenterId} = request.body
        const {partnershipRestaurantId} = request.body
        const { partnershipApproved } = request.body
        const center = request.session.center as Center
        const centerIdFromSession = center.centerId as string
        // const restaurant = request.session.restaurant as Restaurant
        // const restaurantIdFromSession = restaurant.restaurantId as string
        const previousPartnership = await selectPartnershipByPrimaryKey(partnershipCenterId, partnershipRestaurantId)
        console.log('hello world')
        if (previousPartnership === null) {
            return response.json({status: 404, data: null, message: 'this partnership does not exist'})
        }

        if (previousPartnership.partnershipCenterId !== centerIdFromSession) {
            return response.json({status: 400, data: null, message: 'you are not allowed to perform this action'})
        }

        // if (previousPartnership.partnershipRestaurantId !== restaurantIdFromSession) {
        //     return response.json({status: 400, data: null, message: 'you are not allowed to perform this action'})
        // }
        const newPartnership: Partnership = {...previousPartnership, partnershipApproved}
        console.log(newPartnership)
        await updatePartnership(newPartnership)
        return response.json({status: 200, data: null, message: 'Partnership successfully approved'})

    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getPartnershipByPartnershipCenterId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { partnershipCenterId } = request.params
        const data = await selectPartnershipByPartnershipCenterId(partnershipCenterId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

console.log('hi')
export async function getPartnershipByPartnershipRestaurantId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { partnershipRestaurantId } = request.params
        const data = await selectPartnershipByPartnershipRestaurantId(partnershipRestaurantId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}
console.log('bye')