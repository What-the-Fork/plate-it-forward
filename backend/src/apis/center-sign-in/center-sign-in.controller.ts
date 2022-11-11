import {Request, Response} from 'express'
import 'express-session'
import {v4 as uuid} from 'uuid'
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {Center, selectCenterByCenterContactEmail} from "../../utils/models/Center";

export async function centerSignInController(request: Request, response: Response): Promise<Response> {
    try {
        const {centerContactEmail, centerPassword} = request.body
        const center: Center | null = await selectCenterByCenterContactEmail(centerContactEmail)

        return (center !== null) && await validatePassword(center.centerHash, centerPassword)
            ? centerSignInSuccessful(request, response, center)
            : centerSignInFailed(response)
    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}

function centerSignInFailed(response: Response): Response {
    return response.json({status: 400, message: 'Email or password is incorrect please try again.', data: null})
}

function centerSignInSuccessful(request: Request, response: Response, center: Center): Response {
    const {
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
    } = center
    const signature: string = uuid()
    const authorization: string = generateJwt({
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
    }, signature)

    request.session.center = center
    request.session.jwt = authorization
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({status: 200, message: 'Sign in successful', data: null})

}