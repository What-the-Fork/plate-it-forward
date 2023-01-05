import {sql} from '../database.utils'

export interface Donation {
    donationId: string | null,
    donationCenterId: string | null,
    donationRestaurantId: string | null,
    donationDate: Date | null,
    donationNumberOfMealsDonated: number | null,
    donationNumberOfMealsServed: number | null,
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

export async function updateDonation (donation: Donation): Promise<string> {
    const {donationId, donationDate, donationNumberOfMealsDonated, donationNumberOfMealsServed, donationServeDate} = donation
    await sql`UPDATE donation
              SET donation_date = ${donationDate},
                  donation_number_of_meals_donated = ${donationNumberOfMealsDonated},
                  donation_number_of_meals_served = ${donationNumberOfMealsServed},
                  donation_serve_date = ${donationServeDate}
              WHERE donation_id = ${donationId}`
    return 'restaurant donation successfully updated'
}

export async function selectDonationByDonationId(donationId: string): Promise<Donation | null> {
    const result = <Donation[]>await sql`SELECT donation_id,
                                                donation_center_id,
                                                donation_restaurant_id,
                                                donation_date,
                                                donation_number_of_meals_donated,
                                                donation_number_of_meals_served,
                                                donation_serve_date
                                         FROM donation
                                         WHERE donation_id = ${donationId}`
    // one to one relationship - must return 1 object or nothing
    return result?.length === 1 ? result[0] : null
}

//so centers can see their meals served
export async function selectDonationsByCenterId(donationCenterId: string): Promise<Donation[]> {
    return <Donation[]>await sql`SELECT donation_id,
                                                donation_center_id,
                                                donation_restaurant_id,
                                                donation_date,
                                                donation_number_of_meals_donated,
                                                donation_number_of_meals_served,
                                                donation_serve_date
                                         FROM donation
                                         WHERE donation_center_id = ${donationCenterId}`
}

// so restaurants can see their donations
export async function selectDonationsByRestaurantId(donationRestaurantId: string): Promise<Donation[]> {
    return <Donation[]>await sql`SELECT donation_id,
                                                donation_center_id,
                                                donation_restaurant_id,
                                                donation_date,
                                                donation_number_of_meals_donated,
                                                donation_number_of_meals_served,
                                                donation_serve_date
                                         FROM donation
                                         WHERE donation_restaurant_id = ${donationRestaurantId}`
}

// get all donations by centerId that haven't been served yet -- added null from stackoverflow
export async function selectNotServedDonationsByCenterId(donationCenterId: string): Promise<Donation[]> {
    return sql <Donation[]>`SELECT donation_id, donation_center_id, donation_restaurant_id, donation_date, donation_number_of_meals_donated, donation_number_of_meals_served, donation_serve_date FROM donation WHERE donation_center_id=${donationCenterId} AND donation_number_of_meals_served is null AND donation.donation_serve_date is null`
}




