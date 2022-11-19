import {Request, Response} from "express";
import Mailgun from "mailgun.js";
import formData from 'form-data';
import Client from 'mailgun.js/dist/lib/client'
import {setActivationToken, setHash } from "../../utils/auth.utils";
import {insertRestaurant, Restaurant} from "../../utils/models/Restaurant";


export async function restaurantSignUpController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        // handles email distribution for sign up
        const mailgun = new Mailgun(formData)
        const mailgunClient = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})
        const {restaurantAddress, restaurantContactEmail, restaurantContactName, restaurantContactPhone, restaurantName, restaurantPassword} = request.body
        const restaurantHash = await setHash(restaurantPassword)
        const restaurantActivationToken = setActivationToken()
        const basePath: string = `${request.protocol}://${request.hostname}${request.originalUrl}/activation/${restaurantActivationToken}`
        const message = `<h2>Welcome to Plate It Forward</h2> 
        Please click the link to verify your account.
        <a href="${basePath}">${basePath}</a>`
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: restaurantContactEmail,
            subject: 'Account verification for Plate It Forward',
            html: message
        }
const restaurant: Restaurant = {
    restaurantId: null,
    restaurantActivationToken,
    restaurantContactName,
    restaurantContactEmail,
    restaurantHash,
    restaurantProfileImgUrl: null,
    restaurantName,
    restaurantNameUrl: null,
    restaurantAddress,
    restaurantContactPhone,
}
        // success message awaits successful sign up/activation token
        const successMessage = await insertRestaurant(restaurant)
        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)
        return response.json({status: 200, message: successMessage})
    } catch (error: any) {
        return (response.json({status: 500, message: error.message, data: null}))
    }
}