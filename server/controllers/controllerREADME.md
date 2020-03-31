~The CitiesController is simply:

1)city, the findOne wrapper for mongoose for
a given city name, which has to be EXACT.

2)cities, the find wrapper for all the cities
 
Frontend must parse for the name which I imagine should be from a dropdown typeable box
using data from cities

Can't offload error checking without lots of https requests

~WeatherController is a wrapper for Darksky API calls;

~uploadController receives any file upload and stores it in adminData
on the server root

~userController handles register and login

1)register requires body with name, age, gender, insurance, email, password, and password2, the confirmation password field
and returns the fields but with the hash instead of passwords

2)login requires email and password and returns a jwt token for serialization/sessioning

~validateController detects malformed inputs for login and register