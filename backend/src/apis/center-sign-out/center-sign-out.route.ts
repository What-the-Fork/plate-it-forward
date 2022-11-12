import { Router } from 'express'
import { centerSignOutController} from "./center-sign-out.controller"

export const centerSignOutRoute: Router = Router()

centerSignOutRoute.route('/')
    .get(centerSignOutController)