import {sql} from '../database.utils'

export interface Donation {
    donationId: string | null,
    donationCenterId: string | null,
    donationRestaurantId: string | null,
    donationDate: Date | null,
    donationNumberOfMealsDonated: string,
    donationNumberOfMealsServed: string,
    donationServeDate: Date | null
}

export async function insertDonation(donation: Donation): Promise<string> {
    const {
        donationCenterId,
        donationRestaurantId,
        donationDate,
        donationNumberOfMealsDonated,
        donationNumberOfMealsServed,
        donationServeDate
    } = donation
    await sql`INSERT INTO donation (donation_id, donation_center_id, donation_restaurant_id, donation_date,
                                    donation_number_of_meals_donated, donation_number_of_meals_served,
                                    donation_serve_date)
              VALUES (gen_random_uuid(), ${donationCenterId}, ${donationRestaurantId}, ${donationDate},
                      ${donationNumberOfMealsDonated}, ${donationNumberOfMealsServed}, ${donationServeDate})`
    return 'donation successfully inserted'
}

export async function updateNumberOfMealsDonated(donation: Donation): Promise<string> {
    const {donationId, donationDate, donationNumberOfMealsDonated} = donation
    await sql`UPDATE donation
              SET donation_date = ${donationDate},
                  donation_number_of_meals_donated = ${donationNumberOfMealsDonated}
              WHERE donation_id = ${donationId}`
    return 'restaurant donation successfully updated'
}

export async function updateNumberOfMealsServed(donation: Donation): Promise<string> {
    const {donationId, donationNumberOfMealsServed, donationServeDate} = donation
    await sql`UPDATE donation
              SET donation_number_of_meals_served = ${donationNumberOfMealsServed},
                  donation_serve_date             = ${donationServeDate}
              WHERE donation_id = ${donationId}`
    return 'center donation successfully updated'
}

export async function selectDonationNumberOfMealsDonated(donationId: string): Promise<Donation | null> {
    const result = <Donation[]>await sql`SELECT donation_number_of_meals_donated
                                         FROM donation
                                         WHERE donation_id = ${donationId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectDonationNumberOfMealsServed(donationId: string): Promise<Donation | null> {
    const result = <Donation[]>await sql`SELECT donation_number_of_meals_served
                                         FROM donation
                                         WHERE donation_id = ${donationId}`
    return result?.length === 1 ? result[0] : null
}

