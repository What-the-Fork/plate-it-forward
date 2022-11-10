import {Request, Response} from "express";
import Mailgun from "mailgun.js";
import formData from 'form-data';
import {setActivationToken, setHash } from "../../utils/auth.utils";
import {insertCenter, Center} from "../../utils/models/Center";

export async function restaurantSignUpController(request: Request, response: Response): Promise<Response | undefined> {

    try {
        const mailgun = new Mailgun(formData)
        const mailgunClient = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})
        const {centerAddress, centerContactEmail, centerContactName, centerContactPhone, centerName, centerPassword, centerPasswordConfirm, centerProfileImgUrl} = request.body
        const centerHash = await setHash(centerPassword)
        const centerActivationToken = setActivationToken()
        const basePath: string = `${request.protocol}://${request.hostname}/${request.originalUrl}/activation/${centerActivationToken}`

        const message = `<h2>Welcome to Plate It Forward</h2> 
        in order to update your center photo you must confirm your account
        <a href="${basePath}">${basePath}</a>`
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: centerContactEmail,
            subject: 'One step closer to Sticky Head -- Account Activation',
            html: message
        }
const center: Center = {
    centerId: null,
    centerActivationToken:,
    centerContactName,
    centerContactEmail,
    centerHash,
    centerProfileImgUrl: null,
    centerName,
    centerAddress: "",
    centerContactPhone: "",
    centerDirectoryImageUrl: "",
    centerLat: "",
    centerLng: "",
    centerPhone: "",
    centerWebsiteUrl: ""
}
        const successMessage = await insertCenter(center)
        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)
        return response.json({status: 200, message: successMessage})
    } catch (error: any) {
        return (response.json({status: 500, message: error.message, data: null}))
    }
}