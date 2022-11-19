import {NextFunction, Request, Response} from 'express'

import {
    insertDonation,
    updateDonation,
    selectDonationByDonationId,
    Donation, selectDonationsByRestaurantId, selectDonationsByCenterId
} from '../../utils/models/Donation'

import {Status} from '../../utils/interfaces/Status'
import {Restaurant} from "../../utils/models/Restaurant";
import { Center } from "../../utils/models/Center";

export async function getAllDonationsController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        // for backend to grab donations for front end stats display
        const {donationRestaurantId} = request.params
        const postgresResult = await selectDonationByDonationId(donationRestaurantId)
        const data = postgresResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 500, data: [], message: ''}))
    }
}

export async function putDonation(request: Request, response: Response): Promise<Response> {
    try {
        // how center updates donation with serve date and amount served
        const {donationId} = request.body
        const {
            donationCenterId,
            donationRestaurantId,
            donationDate,
            donationNumberOfMealsDonated,
            donationNumberOfMealsServed,
            donationServeDate
        } = request.body
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
        const newDonation: Donation = {...previousDonation, donationCenterId,
            donationRestaurantId,
            donationDate,
            donationNumberOfMealsDonated,
            donationNumberOfMealsServed,
            donationServeDate}

        await updateDonation(newDonation)
        return response.json({status: 200, data: null, message: 'Donation successfully updated'})

    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function postDonation(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {donationId, donationCenterId, donationNumberOfMealsDonated, donationDate} = request.body
        if (request.session.restaurant === undefined) {
            throw new Error('you are not logged in')
        }
        const restaurant: Restaurant = request.session.restaurant
        const donationRestaurantId: string = restaurant.restaurantId as string

        const donation: Donation = {
            donationId,
            donationCenterId,
            donationRestaurantId,
            donationNumberOfMealsDonated,
            donationDate,
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

// for restaurant to see their own donations
export async function getDonationsByRestaurantId (request:Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { donationRestaurantId } = request.params
        const data = await selectDonationsByRestaurantId(donationRestaurantId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

// all donations by center id
export async function getDonationsByCenterId (request:Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { donationCenterId } = request.params
        const data = await selectDonationsByCenterId(donationCenterId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}