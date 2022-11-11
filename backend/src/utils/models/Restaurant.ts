import {sql} from "../database.utils";

export interface PartialRestaurant {
    restaurantId: string|null,
    restaurantAddress: string,
    restaurantContactEmail: string,
    restaurantContactName: string,
    restaurantContactPhone: string,
    restaurantName: string,
    restaurantNameUrl: string|null,
    restaurantProfileImgUrl: string|null,
}

export interface Restaurant {
    restaurantId: string|null,
    restaurantActivationToken: string|null,
    restaurantAddress: string,
    restaurantContactEmail: string,
    restaurantContactName: string,
    restaurantContactPhone: string,
    restaurantHash: string,
    restaurantName: string,
    restaurantNameUrl: string|null,
    restaurantProfileImgUrl: string|null,
}

export async function insertRestaurant(restaurant: Restaurant): Promise<string> {
    const {restaurantActivationToken, restaurantAddress, restaurantContactEmail, restaurantContactName, restaurantContactPhone,  restaurantHash, restaurantName, restaurantNameUrl, restaurantProfileImgUrl} = restaurant
    await sql`Insert Into restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
    VALUES (gen_random_uuid(),${restaurantActivationToken},${restaurantAddress},${restaurantContactEmail},${restaurantContactName},${restaurantContactPhone},${restaurantHash},${restaurantName},${restaurantNameUrl},${restaurantProfileImgUrl})`
    return 'profile successfully created'
}

export async function selectPartialRestaurantByRestaurantId(restaurantId: string): Promise<Restaurant|null> {
    const result = <Restaurant[]>await sql`SELECT restaurant_id, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_name, restaurant_name_url, restaurant_profile_img_url FROM restaurant WHERE restaurant_id = ${restaurantId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectRestaurantByRestaurantActivationToken (restaurantActivationToken: string): Promise<Restaurant|null> {
    const result = <Restaurant[]>await sql`SELECT restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url FROM restaurant WHERE restaurant_activation_token = ${restaurantActivationToken}`
    return result?.length === 1 ? result[0] : null
}

export async function selectRestaurantByRestaurantContactEmail (restaurantContactEmail: string): Promise<Restaurant|null> {
    const result = <Restaurant[]>await sql`SELECT restaurant_id, restaurant_activation_token, restaurant_address, restaurant_hash,  restaurant_name, restaurant_name_url FROM restaurant WHERE restaurant_contact_email = ${restaurantContactEmail}`
    return result?.length === 1 ? result[0] : null
}

export async function selectWholeRestaurantByRestaurantId (restaurantId: string): Promise<Restaurant|null> {
    const result = <Restaurant[]>await sql`SELECT restaurant_id, restaurant_activation_token, restaurant_address, restaurant_hash,restaurant_name, restaurant_name_url, restaurant_profile_img_url FROM restaurant WHERE restaurant_id = ${restaurantId}`
    return result?.length === 1 ? result[0] : null
}

export async function updateRestaurant (restaurant: Restaurant): Promise<string> {
    const {restaurantId, restaurantActivationToken, restaurantAddress, restaurantContactEmail, restaurantContactName, restaurantContactPhone, restaurantName, restaurantNameUrl, restaurantProfileImgUrl} = restaurant
    await sql `UPDATE restaurant SET restaurant_activation_token = ${restaurantActivationToken}, restaurant_address = ${restaurantAddress}, restaurant_contact_email = ${restaurantContactEmail}, restaurant_contact_name = ${restaurantContactName},restaurant_contact_phone = ${restaurantContactPhone}, restaurant_name = ${restaurantName}, restaurant_name_url = ${restaurantNameUrl}, restaurant_profile_img_url = ${restaurantProfileImgUrl} WHERE restaurant_id = ${restaurantId}`
    return 'Profile successfully updated'
}