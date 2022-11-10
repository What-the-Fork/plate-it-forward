import {sql} from "../database.utils";

export interface Center {
    centerId: string|null,
    centerActivationToken: string,
    centerAddress: string,
    centerContactEmail: string,
    centerContactName: string,
    centerContactPhone: string,
    centerDirectoryImgUrl: string|null,
    centerHash: string,
    centerLat: string|null,
    centerLng: string|null,
    centerName: string,
    centerPhone: string|null,
    centerProfileImgUrl: string|null,
    centerWebsiteUrl: string|null,
}

export async function insertCenter(center: Center): Promise<string> {
    const {centerActivationToken, centerAddress, centerContactEmail, centerContactName, centerContactPhone, centerDirectoryImgUrl, centerHash, centerLat, centerLng, centerName, centerPhone, centerProfileImgUrl, centerWebsiteUrl} = center
    await sql`Insert Into center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
    VALUES (gen_random_uuid(),${centerActivationToken},${centerAddress},${centerContactEmail},${centerContactName},${centerContactPhone},${centerDirectoryImgUrl},${centerHash},${centerLat},${centerLng},${centerName},${centerPhone},${centerProfileImgUrl},${centerWebsiteUrl})`
    return 'profile successfully created'
}

export async function selectPartialCenterByCenterId(centerId: string): Promise<Center|null> {
    const result = <Center[]>await sql`SELECT center_id, center_address, center_directory_img_url, center_lat, center_lng, center_name, center_phone, center_website_url FROM center WHERE center_id = ${centerId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectCenterByCenterActivationToken (centerActivationToken: string): Promise<Center|null> {
    const result = <Center[]>await sql`SELECT center_id, center_activation_token, center_address, center_hash, center_directory_img_url, center_lat, center_lng, center_name, center_phone, center_website_url FROM center WHERE center_activation_token = ${centerActivationToken}`
    return result?.length === 1 ? result[0] : null
}

export async function selectCenterByCenterContactEmail (centerContactEmail: string): Promise<Center|null> {
    const result = <Center[]>await sql`SELECT center_id, center_activation_token, center_address, center_hash, center_directory_img_url, center_lat, center_lng, center_name, center_phone, center_website_url FROM center WHERE center_contact_email = ${centerContactEmail}`
    return result?.length === 1 ? result[0] : null
}