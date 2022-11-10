import { Request, Response } from 'express'
import {
    PartialCenter,
    Center,
    selectPartialCenterByCenterId,
    selectWholeCenterByCenterId,
    updateCenter
} from '../../utils/models/Center'
import { Status } from xxxxxxxxxxxx

export async function getCenterByCenterId (request: Request, response: Response): Promise<Response> {
    try {
        const { centerId } = request.params
        const postgresResult = await selectPartialCenterByCenterId(centerId)
        const data = postgresResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message }))
    }
}