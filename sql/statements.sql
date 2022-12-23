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
INSERT INTO center(center_id, center_activation_token, center_address, center_contact_email, center_contact_name, center_contact_phone, center_directory_img_url, center_hash, center_lat, center_lng, center_name, center_phone, center_profile_img_url, center_website_url)
VALUES(gen_random_uuid(), '', '4900 Kachina St NW, Albuquerque, NM 87120', 'alexayybum@gmail.com', 'Mike Jones', '505-331-8004', '', '', '35.15552181666039', '-106.69502716136411', 'Don Newton-Taylor Ranch Community Center', '(505)768-6006', '', 'https://www.bernco.gov/community-services/community-centers/paradise-hills/');

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
VALUES('0e1dae01-21d7-4913-928f-2e2b576be069', 'dedd523f-2bba-4989-ab80-1c7b9daab37b', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('0e1dae01-21d7-4913-928f-2e2b576be069', 'eeac97c7-fe12-4601-9191-94f6f7effa93', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('0e1dae01-21d7-4913-928f-2e2b576be069', '15548e57-a0d5-4fe4-a4c7-160470c59c1b', true);

-- PARTNERSHIPS FOR WESTGATE CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('01bd7684-b8e9-455f-a109-b49f81becd1d', '0cf8d07d-b5dc-4e51-af21-82055891a9bc', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('01bd7684-b8e9-455f-a109-b49f81becd1d', 'ccfe97ed-f954-4a13-9c2c-84a196e1a3a4', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('01bd7684-b8e9-455f-a109-b49f81becd1d', '8f1550e4-66e6-4959-b813-18b30f2bace7', true);

-- PARTNERSHIPS FOR MCKINLEY CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('766a6375-7452-4929-84ce-f2734934aae3', '9a2b5e86-7e7f-4fa0-9a2f-eef318b55364', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('766a6375-7452-4929-84ce-f2734934aae3', '86065d71-784d-42aa-8c67-d20cb65cbf08', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('766a6375-7452-4929-84ce-f2734934aae3', 'a9c418d2-b852-4a33-9bbe-66904e977214', true);

-- PARTNERSHIPS FOR PARADISE HILLS CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('85d2849a-02a9-4920-a5e0-a45a28b2a5a5', '9000ca13-daaa-434f-aa8e-7ec1fe6b0905', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('85d2849a-02a9-4920-a5e0-a45a28b2a5a5', 'b0c52af5-60b1-412f-bec6-8d377cd5e9f2', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('85d2849a-02a9-4920-a5e0-a45a28b2a5a5', 'b9b44732-e3c0-4544-8db3-d4189dbb2067', true);

-- PARTNERSHIPS FOR DON NEWTON CC
INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('219e2492-45df-470b-a7c5-18c035636934', '9fe730fd-19ac-413b-8e4e-f8466216fed0', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('219e2492-45df-470b-a7c5-18c035636934', '43fcda19-8422-4e9b-8707-0b0b15b9be14', true);

INSERT INTO partnership(partnership_center_id, partnership_restaurant_id, partnership_approved)
VALUES('219e2492-45df-470b-a7c5-18c035636934', '50cd673a-af53-4a9c-9f41-a8776f6184ef', true);