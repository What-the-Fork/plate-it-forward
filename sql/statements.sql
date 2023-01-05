-- MUST COMMENT OUT EXISTING STATEMENTS IF TRYING TO RUN NEW CODE

-- WESTGATE CC
INSERT INTO center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
VALUES(gen_random_uuid(),'', '10001 De Vargas Rd SW, Albuquerque, NM 87121', 'erinceleste04@gmail.com', 'Doc Martin', '5055555555', '', '', '35.05678146451052', '-106.74398280208875', 'Westgate Community Center', '(505)768-4750', '', 'https://www.cabq.gov/family');

-- CESAR CHAVEZ CC
INSERT INTO center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
VALUES(gen_random_uuid(),'', '7505 Kathryn Ave SE, Albuquerque, NM 87120', 'eruiz24@cnm.edu', 'Marteeeen Bonacci', '5055555505', '', '', '35.06649787795573', '-106.56473806931794', 'Cesar Chavez Community Center', '(505)256-2680', '', 'https://www.cabq.gov/family');

-- MCKINLEY CC
INSERT INTO center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
VALUES(gen_random_uuid(), '', '3401 Monroe St NE, Albuquerque, NM 87110', 'erinbeatyodown@gmail.com', 'Doc Martin', '5055555555', '', '', '35.12269689056865', '-106.59261760795383', 'McKinley Community Center', '(505)767-5930', '', 'https://www.cabq.gov/family/crei/community-centers/mckinley-community-center');

-- PARADISE HILLS CC
INSERT INTO center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
VALUES(gen_random_uuid(),'', '5901 Paradise Blvd NW, Albuquerque, NM 87114', 'erinsaywut@gmail.com', 'Mike Jones', '(505)331-8004', '', '', '35.195297305671154', '-106.59261760795383', 'Paradise Hills Community Center', '(505)314-0245', '', 'https://www.bernco.gov/community-services/community-centers/paradise-hills/');

-- DON NEWTON CC
-- INSERT INTO center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
-- VALUES(gen_random_uuid(), '', '4900 Kachina St NW, Albuquerque, NM 87120', 'alexayybum@gmail.com', 'Mike Jones', '505-331-8004', '', '', '35.15552181666039', '-106.69502716136411', 'Don Newton-Taylor Ranch Community Center', '(505)768-6006', '', 'https://www.bernco.gov/community-services/community-centers/paradise-hills/');

-- CESAR CHAVEZ CC RESTAURANT PARTNERS
INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '5211 Gibson Blvd SE #4724, Albuquerque, NM 87108', 'contact@stripes.com', 'Mike Jones', '(505) 265-1880', '', 'Stripe’s Burrito Co.', 'https://stripesco.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '110 Louisiana Blvd SE a, Albuquerque, NM 87108', 'contact@padthaicafe.com', 'Mike Jones', '(505) 250-2504', '', 'Pad Thai Cafe', 'https://padthaicafeabq.net/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '400 Washington St SE, Albuquerque, NM 87108', 'contact@franks.com', 'Mike Jones', '(505) 800-2763', '', 'Frank’s Famous Chicken & Waffles', 'https://www.franksfamouschickenandwaffles.com/', '');

-- PARADISE RESTAURANT CC PARTNERS
INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '10500 4th St NW, Albuquerque, NM 87114', 'contact@elpinto.com', 'Mike Jones', '(505) 410-8971', '', 'El Pinto Restaurant', 'https://www.elpinto.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '10500 Coors Blvd Bypass NW, Albuquerque, NM 87114', 'contact@olivegarden.com', 'Mike Jones', '(505) 233-2507', '', 'Olive Garden Italian Restaurant', 'https://www.olivegarden.com/home', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '10019 Coors Blvd NW, Albuquerque, NM 87114', 'contact@rangecafe.com', 'Mike Jones', '(505) 985-7856', '', 'Range Cafe', 'https://www.rangecafe.com/', '');

-- MCKINLEY CC RESTAURANT PARTNERS
INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '2924 San Mateo Blvd NE, Albuquerque, NM 87110', 'alex@garcias.com', 'Alex Garcia', '505-123-8004', '', 'Garcia’s Kitchen', 'https://www.garciaskitchen.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '3000 San Pedro Dr NE, Albuquerque, NM 87110', 'alex@swissalps.com', 'Alex Swiss', '505-386-8004', '', 'Swiss Alps Bakery', 'https://www.swissalpsbakery.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '4730 Pan American Fwy NE, Albuquerque, NM 87109', 'alex@nexus.com', 'Alex Nexus', '505-297-8004', '', 'Nexus Brewery & Restaurant', 'https://restaurant.nexusbrewery.com/', '');

-- WESTGATE CC RESTAURANT PARTNERS
INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '809 98th St SW, Albuquerque, NM 87121', 'contact@amadeos.com', 'Mike Jones', '505-831-9339', '', 'Amadeo’s Pizza', 'https://www.amadeospizza.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '101 98th St New Suite #109, Albuquerque, NM 87121', 'contact@wings.com', 'Mike Jones', '505-836-4622', '', 'Wings Gone Wild', 'https://wingsgonewildalbuquerque.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '9200 Central Ave SW, Albuquerque, NM 87121', 'contact@cafe66.com', 'Mike Jones', '505-974-5645', '', 'Cafe 66 New Mexican Restaurant', '', '');

-- DON NEWTON CC RESTAURANT PARTNERS
INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '4200 Montaño Rd NW, Albuquerque, NM 87120', 'alex@dions.com', 'Alex Dion', '(505)898-1161', '', 'Dion’s', 'https://www.dions.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '6001 Winter Haven Rd NW M, Albuquerque, NM 87120', 'alex@mtuccis.com', 'Alex Tucci', '(505)826-1161', '', 'M’tucci’s Italian', 'https://www.mtuccis.com/', '');

INSERT INTO restaurant(restaurant_id, restaurant_activation_token, restaurant_address, restaurant_contact_email, restaurant_contact_name, restaurant_contact_phone, restaurant_hash, restaurant_name, restaurant_name_url, restaurant_profile_img_url)
VALUES(gen_random_uuid(), '', '5400 Sevilla Ave NW, Albuquerque, NM 87120', 'alex@jinja.com', 'Alex Jinja', '(505)753-1161', '', 'Jinja Bar & Bistro', 'https://jinjabistro.com/', '');

-- PARTNERSHIPS FOR CESAR CHAVEZ CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('8a5c80dc-b990-4241-97e8-c73f292b6efd', '3863bd99-61e2-4e77-8cd1-3d878b54be51', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('8a5c80dc-b990-4241-97e8-c73f292b6efd', 'c7db9504-8744-41af-b20a-2cfe93047dda', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('8a5c80dc-b990-4241-97e8-c73f292b6efd', '29250411-c8e6-463b-91bb-41fc116c9bc4', true);

-- PARTNERSHIPS FOR WESTGATE CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('176db6d1-2ec8-4bcd-8fdd-5f97dedf0900', '1f7a4c30-5906-472e-825e-366d5c2c9dbb', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('176db6d1-2ec8-4bcd-8fdd-5f97dedf0900', '7daa0466-a107-4435-bec4-92bc1f624ff1', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('176db6d1-2ec8-4bcd-8fdd-5f97dedf0900', '2aa1f33f-684f-4668-beaa-19d06ae045d0', true);

-- PARTNERSHIPS FOR MCKINLEY CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('fdd70a4c-c503-4e62-acf7-976e1a4e12f1', 'b551e684-7e09-407b-b6a9-ae1d359729c1', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('fdd70a4c-c503-4e62-acf7-976e1a4e12f1', '28a8c3b4-2518-4a0b-bad7-7d0867f69420', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('fdd70a4c-c503-4e62-acf7-976e1a4e12f1', '4ebb5dcd-0d1b-4a1d-aeae-3e8828ee1b9d', true);

-- PARTNERSHIPS FOR PARADISE HILLS CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('e7275f99-22f2-4d9d-b37c-cfdfe3b76cd0', 'dde8aeff-7a12-4364-801c-41ee60ca96d2', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('e7275f99-22f2-4d9d-b37c-cfdfe3b76cd0', '726ed862-8c77-4526-b8c9-a437fb4170db', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('e7275f99-22f2-4d9d-b37c-cfdfe3b76cd0', '3e3e7f25-e062-46de-9f76-ef4d2548e283', true);

-- PARTNERSHIPS FOR DON NEWTON CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('bb293067-4451-487e-8259-af4ddc765d28', '0b5c7c92-acbc-44c2-ab3e-eca593b180cd', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('bb293067-4451-487e-8259-af4ddc765d28', '26652fce-4ab6-4d92-b655-933cfe3a4d1e', true);
