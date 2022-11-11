import { NextFunction, Request, Response } from 'express'
import { Center, selectCenterByCenterActivationToken, updateCenter} from '../../utils/models/Center'
import {Status} from "../../utils/interfaces/Status";

export async function activationController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { activation } = request.params
        const center = await selectCenterByCenterActivationToken(activation)
        console.log(center)

        const activationFailed = (): Response => response.json({
            status: 400,
            data: null,
            message: 'Account activation has failed. Have you already activated this account?'})

        const activationSucceeded = async (center: Center): Promise<Response> => {
            const updatedCenter = { ...center, centerActivationToken: null }
            console.log(updatedCenter)
            await updateCenter(updatedCenter)
            return response.json({
                status: 200,
                data: null,
                message: 'Account activation was successful!'})
        }

        return (center !== null) ? await activationSucceeded(center) : activationFailed()
    } catch (error: any) {
        console.log(error)
        return response.json({
            status: 500,
            data: null,
            message: 'error.message'})
    }
}
