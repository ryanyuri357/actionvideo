# Action Video - Restful API for managing video rentals
## JavaScript/ES6+, Node.js + Express, MongoDB
### Manage movies, rentals, returns, users, customers and genres
### Unit + Integration testing with Jest framework.
### Authentication with JWT and role based authorization. 
### Unit + Integration testing with Jest framework.

## API documentation PDF:
https://www.dropbox.com/s/d98iwkx58tvl9qn/Action%20Video%20API%20Documentation.pdf?dl=0



## Authentication/Authorization provided for testing (Java Web Token):

###  Add to response header

### Key:

x-auth-token

 ### Value:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTcwYjJlODZlMjY3YTI5ZmMxZjBlNzEiLCJpYXQiOjE2MzQ3NzU3ODR9.iSK9Pt_PLfqKJ8NDdCahwqnR91cv7xl4aRAgkioCiS8

## API base URL + Routes (Suggest Postman for API testing):
https://action-video-api.herokuapp.com/api

### ROUTES:

### movies

GET:   / movies   

POST:  /movies     🔒

Sample JSON in body:
{
    "title": " What About Bob?",
    "numberInStock": 10,
    "dailyRentalRate": 3,
    "genreId": "617ae6a603b7ac00162e51b8"
}


PUT:    /movies/{movieId}   🔒

Sample JSON in body:
{
    "title": " What About Bob?",
    "numberInStock": 10,
    "dailyRentalRate": 3,
    "genreId": "617ae6a603b7ac00162e51b8"
}


DELETE:    /movies/{movieId}	 🔒

GET	/movies/{movieId}	 

### rentals

GET:	/rentals	

POST:	/rentals	



Sample JSON in body:
{
    "customerId": "618580026bc7860016106f8e",
    "movieId": "617ae88d03b7ac00162e51bb"
}

GET:	/rentals/{rentalId}	 	

POST:   /returns    🔒

Sample JSON in body:
{
    "customerId": "618580026bc7860016106f8e",
    "movieId": "617ae88d03b7ac00162e51bb"
}

### returns
POST:	/returns	 	🔒

Sample JSON in body:
{
    "customerId": "618580026bc7860016106f8e",
    "movieId": "617ae88d03b7ac00162e51bb"
}


### genres

GET:	/genres	 	 

POST:	/genres	 	🔒

Sample JSON in body: 
{
    "name": "Animated"
}

PUT:	/genres/{genreId}   🔒

Sample JSON in body: 
{
    "name": "Animated"
}

DELETE:	/genres/{genreId}	 	🔒

GET:	/genres/{genreId}	 	

### users
GET:	/users/me	 	🔒

POST:	/users	 	 

Sample JSON in body:
{
    "name": "Bob Sacamano",
    "email": "bsacamano99@gmail.com",
    "password": "Test123$"
}


### authorization

POST:	/auth	 	🔒

Sample JSON in body:
{
    "email": "bsacamano99@gmail.com",
    "password": "Test123$"
}

### customers

GET:	/customers	 	 

POST:	/customers	 	

Sample JSON in body:
{
    "name": "Bob Villa",
    "phone": "5128003232",
    "isGold": "true"
}

PUT:	/customers/{customerId}	 	

Sample JSON in body:
{
    "name": "Bob Villa",
    "phone": "5128003232",
    "isGold": "true"
}

DELETE:     /customers/{customerId}	 	

GET:   	    /customers/{customerId}	 	







