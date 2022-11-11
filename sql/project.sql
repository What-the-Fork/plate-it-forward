-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS partnership;
DROP TABLE IF EXISTS donation;
DROP TABLE IF EXISTS restaurant;
DROP TABLE IF EXISTS center;

CREATE TABLE IF NOT EXISTS center (
                         center_id UUID NOT NULL,
                         center_activation_token CHAR(32),
                         center_address VARCHAR(128) UNIQUE,
                         center_contact_email VARCHAR(128) NOT NULL UNIQUE,
                         center_contact_name VARCHAR(64) NOT NULL,
                         center_contact_phone VARCHAR(32) NOT NULL,
                         center_directory_img_url VARCHAR(128),
                         center_hash CHAR(97) NOT NULL,
                         center_lat VARCHAR (16),
                         center_lng VARCHAR (16),
                         center_name VARCHAR (64) NOT NULL,
                         center_phone VARCHAR (32),
                         center_profile_img_url VARCHAR (255),
                         center_website_url VARCHAR (128),
                         PRIMARY KEY(center_id)
);
CREATE TABLE IF NOT EXISTS restaurant (
                       restaurant_id UUID NOT NULL,
                       restaurant_activation_token CHAR (32),
                       restaurant_address VARCHAR(128) NOT NULL UNIQUE,
                       restaurant_contact_email VARCHAR(128) NOT NULL UNIQUE,
                       restaurant_contact_name VARCHAR(64) NOT NULL,
                       restaurant_contact_phone VARCHAR(32) NOT NULL,
                       restaurant_hash CHAR(97) NOT NULL,
                       restaurant_name VARCHAR (64) NOT NULL,
                       restaurant_name_url VARCHAR (128),
                       restaurant_profile_img_url VARCHAR (255) NOT NULL,
                       PRIMARY KEY(restaurant_id)
);
CREATE TABLE IF NOT EXISTS donation (
                       donation_id UUID NOT NULL,
                       donation_center_id UUID NOT NULL,
                       donation_restaurant_id UUID NOT NULL,
                       donation_date DATE NOT NULL,
                       donation_number_of_meals_donated VARCHAR (8) NOT NULL,
                       donation_number_of_meals_served VARCHAR (8) NOT NULL,
                       donation_serve_date DATE NOT NULL,
                       FOREIGN KEY(donation_center_id) REFERENCES center(center_id),
                       FOREIGN KEY(donation_restaurant_id) REFERENCES restaurant(restaurant_id),
                       PRIMARY KEY (donation_id)
);
CREATE INDEX ON donation (donation_center_id);
CREATE INDEX ON donation (donation_restaurant_id);

CREATE TABLE IF NOT EXISTS partnership (
                        partnership_center_id UUID NOT NULL,
                        partnership_restaurant_id UUID NOT NULL,
                        partnership_approved VARCHAR (8) NOT NULL,
                        FOREIGN KEY (partnership_center_id) REFERENCES center (center_id),
                        FOREIGN KEY (partnership_restaurant_id) REFERENCES restaurant (restaurant_id),
                        PRIMARY KEY(partnership_center_id, partnership_restaurant_id)
);
CREATE INDEX ON partnership (partnership_center_id);
CREATE INDEX ON partnership (partnership_restaurant_id);