import { NextFunction, Request, Response} from "express"
import { Status } from '../../utils/interfaces/Status'
import {Center, selectCenterByDonationRestaurantId} from '../../utils/models/Center'
import { Restaurant} from "../../utils/models/Restaurant"
import { insertPartnership, updatePartnership} from "../../utils/models/Partnership"
import {Donation, insertDonation, selectDonationByDonationId, updateDonation} from "../../utils/models/Donation";

export async function postPartnership(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { partnershipCenterId, partnershipRestaurantId } = request.body
        if (request.session.restaurant === undefined) {
            throw new Error('you are not logged in')
        }
        const restaurant: Restaurant = request.session.restaurant
        const partnershipRestaurantId: string = restaurant.restaurantId as string

        const center = await selectCenterByDonationRestaurantId(partnershipRestaurantId)

        if (center?.centerId !== null) {
            throw new Error('unable to process donation no approved partnerships')
        }
        const donationCenterId = center.centerId


        const donation: Donation = {
            donationId: null,
            donationRestaurantId,
            donationCenterId,
            donationNumberOfMealsDonated,
            donationDate: null,
            donationServeDate: null,
            donationNumberOfMealsServed: null
        }
        const result = await insertDonation(donation)
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

        const previousDonation = await selectDonationByDonationId(donationId)
        // if donationByDonationId does not exist
        if (previousDonation === null) {
            return response.json({status: 404, data: null, message: 'this donation does not exist'})
        }
        // if donationCenterId does not match centerIdFromSession
        if (previousDonation.donationCenterId !== centerIdFromSession) {
            return response.json({status: 400, data: null, message: 'you are not allowed to perform this action'})
        }
        // from previousDonation - updates donationServeDate and donationNumberOfMealsServed
        const newDonation: Donation = {...previousDonation, donationServeDate, donationNumberOfMealsServed}
        await updateDonation(newDonation)
        return response.json({status: 200, data: null, message: 'Donation successfully updated'})

    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}