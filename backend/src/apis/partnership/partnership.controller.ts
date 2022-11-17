import { NextFunction, Request, Response} from "express"
import { Status } from '../../utils/interfaces/Status'
import {Center, selectCenterByDonationRestaurantId} from '../../utils/models/Center'
import { Restaurant} from "../../utils/models/Restaurant"
import {
    insertPartnership,
    Partnership,
    selectPartnershipByCenterId,
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
            partnershipCenterId: null,
            partnershipRestaurantId: null,
            partnershipApproved: null
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
    try {
        const {partnershipCenterId, partnershipRestaurantId} = request.params
        const { partnershipApproved } = request.body
        const center = request.session.center as Center
        const centerIdFromSession = center.centerId as string

        const previousPartnership = await selectPartnershipByCenterId(partnershipCenterId)
        // if donationByDonationId does not exist
        if (previousPartnership === null) {
            return response.json({status: 404, data: null, message: 'this partnership does not exist'})
        }
        // if donationCenterId does not match centerIdFromSession
        if (previousPartnership.partnershipCenterId !== centerIdFromSession) {
            return response.json({status: 400, data: null, message: 'you are not allowed to perform this action'})
        }
        // from previousDonation - updates donationServeDate and donationNumberOfMealsServed
        const newPartnership: Partnership = {...previousPartnership, partnershipApproved }
        await updatePartnership(newPartnership)
        return response.json({status: 200, data: null, message: 'Partnership successfully approved'})

    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}