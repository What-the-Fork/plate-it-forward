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
    updatePartnership, destroyPartnership
} from "../../utils/models/Partnership"

export async function postPartnership(request: Request, response: Response): Promise<Response<Status>> {
    try {
        // restaurant selects center by its id to request partnership
        const {partnershipCenterId} = request.body
        // restaurant must be signed in
        if (request.session.restaurant === undefined) {
            throw new Error('you are not logged in')
        }
        const restaurant: Restaurant = request.session.restaurant
        const partnershipRestaurantId: string = restaurant.restaurantId as string


        const partnership: Partnership = {
            partnershipCenterId,
            partnershipRestaurantId,
            // center approves partnership
            partnershipApproved: true
        }
        // result awaits center approval
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
    try {
        // how center sees/approves partnership
        const {partnershipCenterId} = request.body
        const {partnershipRestaurantId} = request.body
        const { partnershipApproved } = request.body
        const center = request.session.center as Center
        const centerIdFromSession = center.centerId as string
        const previousPartnership = await selectPartnershipByPrimaryKey(partnershipCenterId, partnershipRestaurantId)

        if (previousPartnership === null) {
            return response.json({status: 404, data: null, message: 'this partnership does not exist'})
        }

        if (previousPartnership.partnershipCenterId !== centerIdFromSession) {
            return response.json({status: 400, data: null, message: 'you are not allowed to perform this action'})
        }

        // following Brewer 101 example. updatedValues didn't break anything but didn't fix anything either...
        const updatedValues = { partnershipCenterId, partnershipRestaurantId, partnershipApproved }

        // updates partnership approve entity/ says a ok thumbs up
        // updatedValues in lieu of partnershipApproved (no spread operator)
        const newPartnership: Partnership = {...previousPartnership, ...updatedValues}
        await updatePartnership(newPartnership)
        return response.json({status: 200, data: null, message: 'Partnership successfully approved'})

    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function deletePartnership (request: Request, response: Response): Promise<Response> {
    try {
        const {partnershipCenterId, partnershipRestaurantId} = request.params
        const center = request.session.center as Center
        const centerIdFromSession = center.centerId as string
        const previousPartnership = await selectPartnershipByPrimaryKey(partnershipCenterId, partnershipRestaurantId)
        if (previousPartnership === null) {
            return response.json({status: 404, data: null, message: 'cannot deny, this partnership does not exist'})
        }

        if (previousPartnership.partnershipCenterId !== centerIdFromSession) {
            return response.json({status: 400, data: null, message: 'you are not allowed to perform this action'})
        }

        const denyPartnership: Partnership = {...previousPartnership}
        await destroyPartnership(denyPartnership)
        return response.json({status: 200, data: null, message: 'Partnership denied'})
    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

    // for center to see what restaurants they are partnered with
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

// for restaurant to see what center they are partnered with
export async function getPartnershipByPartnershipRestaurantId
(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { partnershipByRestaurantId } = request.params
        const data = await selectPartnershipByPartnershipRestaurantId(partnershipByRestaurantId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}