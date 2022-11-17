import {sql} from "../database.utils"
import {Restaurant} from "./Restaurant";
import {Center} from "./Center";

export interface Partnership {
    partnershipCenterId: string | null,
    partnershipRestaurantId: string | null,
    partnershipApproved: true | null

}

export async function insertPartnership (partnership: Partnership): Promise<string> {
    const {partnershipCenterId, partnershipRestaurantId, partnershipApproved} = partnership
    await sql`INSERT INTO partnership (partnership_center_id, partnership_restaurant_id, partnership_approved) VALUES(${partnershipCenterId}, ${partnershipRestaurantId}, ${partnershipApproved})`
    return 'partnership requested'

}

export async function updatePartnership (partnership: Partnership): Promise<string|null> {
    const {partnershipCenterId, partnershipRestaurantId, partnershipApproved} = partnership
    await sql`UPDATE partnership SET partnership_center_id = ${partnershipCenterId}, partnership_restaurant_id = ${partnershipRestaurantId}, partnership_approved = ${partnershipApproved} WHERE partnership_center_id = ${partnershipCenterId} AND partnership_restaurant_id = ${partnershipRestaurantId}`
    return 'partnership approved'
}

export async function selectPartnershipByCenterId (partnershipCenterId: string):  Promise<Partnership|null> {
    const result = <Partnership[]> await sql `SELECT partnership_center_id, partnership_restaurant_id, partnership_approved FROM partnership WHERE partnership_center_id = ${partnershipCenterId}`
    return result?.length === 1 ? result[0] : null
}
