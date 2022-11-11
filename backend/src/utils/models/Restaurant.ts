import {sql} from "../database.utils";
import {restaurant} from "./restaurant";

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
    VALUES (gen_random_uuid(),${restaurantActivationToken},${restaurantAddress},${restaurantContactEmail},${restaurantContactName},${restaurantContactPhone}, ${restaurantHash},${restaurantName}, ${restaurantNameUrl},${restaurantProfileImgUrl}`
    return 'profile successfully created'
}