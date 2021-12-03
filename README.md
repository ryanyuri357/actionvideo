# Action Video - Restful API for managing video rentals
## JavaScript/ES6+, Node.js + Express, MongoDB
### Manage movies, rentals, returns, users, customers and genres
### Unit + Integration testing with Jest framework.
### Authentication with JWT and role based authorization. 
### Unit + Integration testing with Jest framework.
## API documentation PDF:
https://www.dropbox.com/s/d98iwkx58tvl9qn/Action%20Video%20API%20Documentation.pdf?dl=0
## API base URL hosted on Heroku + Routes (Suggest Postman for full API testing)::
https://action-video-api.herokuapp.com/api
### MOVIES:
GET: /movies 
POST: /movies (req auth)

Sample JSON in body:
{
    "title": " What About Bob?",
    "numberInStock": 10,
    "dailyRentalRate": 3,
    "genreId": "617ae6a603b7ac00162e51b8"
}


PUT	/movies/{movieId}
DELETE	/movies/{movieId}	 
DELETE	/movies/{movieId}
GET	/movies/{movieId}	 
### GENRES:

