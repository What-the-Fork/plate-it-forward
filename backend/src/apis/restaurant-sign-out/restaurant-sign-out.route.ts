import { Router } from 'express'
import { restaurantSignOutController} from "./restaurant-sign-out.controller"

export const restaurantSignOutRoute: Router = Router()

restaurantSignOutRoute.route('/')
    .get(restaurantSignOutController)