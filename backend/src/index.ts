import { App } from './App'
import {Center} from "./utils/models/Center";
import {Restaurant} from "./utils/models/Restaurant";
declare module 'express-session' {
  export interface SessionData {
    center: Center | undefined
    restaurant: Restaurant | undefined
    signature: string | undefined
    jwt: string | undefined
  }
}
// instantiate new app and pass it a port as an argument to start with (4200)
async function main (): Promise<void> {
  try {
    const app = new App(4200)
    await app.listen()
  } catch (e) {
    // console.log(e)
  }
}

main().catch(error => { console.error(error) })