import { NextFunction, Request, Response } from 'express'
import { verify, VerifyErrors } from 'jsonwebtoken'
import { Status } from '../interfaces/Status'
import { Center } from '../models/Center'
import { Restaurant } from '../models/Restaurant'
import { IncomingHttpHeaders } from 'http'

export function isLoggedIn (request: Request, response: Response, next: NextFunction): any {
    const status: Status = { status: 400, message: 'Please login', data: null }

    const sessionCenter = (request: Request): Center | undefined => request.session?.center ?? undefined
    console.log(request.sessionID)
    const sessionRestaurant = (request: Request): Restaurant | undefined => request.session?.restaurant ?? undefined
    console.log(request.sessionID)

    const signature = (request: Request): string => request.session?.signature ?? 'no signature'

    const isCenterSessionActive = (isCenterActive: Center | undefined): boolean => (isCenterActive !== undefined)

    const isRestaurantSessionActive = (isRestaurantActive: Restaurant | undefined): boolean => (isRestaurantActive !== undefined)

    const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {
    return headers.authorization
    }

    const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers)

    const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
        if (unverifiedJwtToken === undefined) {
            return false
        }
        const result: unknown = verify (
            unverifiedJwtToken,
            signature(request),
            { maxAge: '3hr' },
            (error: VerifyErrors | null): boolean => error == null
        ) as unknown

        return result as boolean
    }

    if (isJwtValid(unverifiedJwtToken) && isCenterSessionActive(sessionCenter(request) || isRestaurantSessionActive(sessionRestaurant(request)))) {
        return next()
    }
    isJwtValid(unverifiedJwtToken) && isCenterSessionActive(sessionCenter(request) || isRestaurantSessionActive(sessionRestaurant(request))) ? next() : response.json(status)
}
