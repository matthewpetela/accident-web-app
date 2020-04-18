~CitiesController is simply:

    cities, which returns the local JSON file of cities and data

~WeatherController is a wrapper for Darksky API calls:

    request cityname in URL and only cities in cityData, returns raw darksky API data

~uploadController receives any file upload

    Quizes go to client/src/components/views/quiz/ 
    Crashdata go to server/adminData/ (DummyData currently)
    Filename is the file's name + UNIX epoch milliseconds, success is 200 OK

~userController handles register and login

    Register provides all data to create a user and returns 200 OK
    Login takes email and password and provides a token good for 1 year

~validateController detects malformed inputs for login and register

    Currently busted as frontend hasn't sent all user data

