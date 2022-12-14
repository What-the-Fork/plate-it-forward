import {Request, Response} from "express";
import Mailgun from "mailgun.js";
import formData from 'form-data'
import Client from 'mailgun.js/dist/lib/client'
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {insertCenter, Center} from "../../utils/models/Center";


export async function centerSignUpController(request:Request, response:Response): Promise<Response | undefined> {
    try {
        // handles email distribution for sign up
        const mailGun = new Mailgun(formData)
        const mailGunClient = mailGun.client({username:'api', key:process.env.MAILGUN_API_KEY as string})
        const {centerAddress, centerContactEmail, centerContactName, centerContactPhone, centerName, centerPassword} = request.body
        const centerHash = await setHash(centerPassword)
        const centerActivationToken = setActivationToken()
        const basePath: string = `${request.protocol}://${request.hostname}:8080${request.originalUrl}activation/${centerActivationToken}`
        const message = `<h2>Welcome to Plate It Forward</h2>
Please click the link to verify your account.
<a href="${basePath}">${basePath}</a>`
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: centerContactEmail,
            subject: 'Account verification for Plate It Forward',
            html: message
        }
    const center: Center = {
        centerId: null,
        centerActivationToken,
        centerContactName,
        centerContactEmail,
        centerHash,
        centerProfileImgUrl: null,
        centerName,
        centerAddress,
        centerContactPhone,
        centerDirectoryImgUrl: null,
        centerLat: null,
        centerLng: null,
        centerPhone: null,
        centerWebsiteUrl: null
    }
        // success message awaits successful sign up/activation token
        const successMessage = await insertCenter(center)
        await mailGunClient.messages.create(process.env.MAILGUN_DOMAIN as string,mailgunMessage)
        return response.json({status:200, message: 'Profile successfully created. Please check your email to verify your account.', data:null})
    } catch(error: any) {
        return (response.json({status:500, message:error.message, data:null}))
    }
}