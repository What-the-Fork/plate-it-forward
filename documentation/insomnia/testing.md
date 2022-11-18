# CENTER

### Sign Up:

POST http://putIpAddressHere:8080/apis/center-sign-up

JSON {"centerAddress": "2486 Blvd ABQ NM 87102", "centerContactEmail": "", "centerContactName": "Sergio Docker Down", "centerContactPhone": "5055555555", "centerName": "Center B", "centerPassword": "", "centerPasswordConfirm": "", "centerProfileImgUrl": "https://i.pinimg.com/280x280_RS/02/e0/a2/02e0a2751950405d5715d6ce92c93bd1.jpg"}

### Activation:

GET http://putIpAddressHere:8080/apis/center-sign-up/activation/putCenterIdHere

### SIGN IN:

POST http://putIpAddressHere:8080/apis/center-sign-in

JSON {"centerContactEmail": "", "centerPassword": ""}

### SIGN OUT:

GET http://putIpAddressHere:8080/apis/center-sign-out


# RESTAURANT

### SIGN UP:

POST http://putIpAddressHere:8080/apis/restaurant-sign-up

JSON {"restaurantAddress": "9182 Ave ABQ NM 87106", "restaurantContactEmail": "", "restaurantContactName": "Alex Mostaghni", "restaurantContactPhone": "5055555555", "restaurantName": "Restaurant X", "restaurantPassword": "", "restaurantPasswordConfirm": "",
"restaurantProfileImgUrl": "https://i.pinimg.com/280x280_RS/02/e0/a2/02e0a2751950405d5715d6ce92c93bd1.jpg"}

### ACTIVATION:

GET http://putIpAddressHere:8080/apis/restaurant-sign-up/activation/putRestuarantIdHere

### SIGN IN:

POST http://putIpAddressHere:8080/apis/restaurant-sign-in

JSON {"restaurantContactEmail": "", "restaurantPassword": ""}

### SIGN OUT:

GET http://putIpAddressHere:8080/apis/restaurant-sign-out


# PARTNERSHIP:

### RESTAURANT REQUEST:

POST http://putIpAddressHere:8080/apis/partnership

JSON {"partnershipCenterId": "", "partnershipRestaurantId": "", "partnershipApproved": true}

### CENTER APPROVE:

PUT http://putIpAddressHere:8080/apis/partnership

JSON {"partnershipCenterId": "", "partnershipRestaurantId": "", "partnershipApproved": true}


# DONATION

### RESTAURANT:

POST http://putIpAddressHere:8080/apis/donation

JSON {"donationCenterId": "", "donationRestaurantId": "", "donationDate": "2022-11-04", "donationNumberOfMealsDonated": 56, "donationNumberOfMealsServed": 56, "donationServeDate": "2022-11-05"}

### CENTER:

PUT http://putIpAddressHere:8080/apis/donation

JSON {"donationId": "", "donationCenterId": "", "donationRestaurantId": "", "donationDate": "2022-11-04", "donationNumberOfMealsDonated": 56, "donationNumberOfMealsServed": 50, "donationServeDate": "2022-11-05"}