The frontend is expected to obtain the city data from /api/cities for
the entire database of cities with their hardcoded admin JSON data, which is:

    City name
    State
    Average rain fall per month
    Average temp per month 
    Insurance crash data 
    Temperature neighbors
To access weather, /api/weather will return the Weather:

    API raw data
    
in darksky's data

Admins require valid admin token
User stuff has:

    Register: POST User data for registering (res 200 response)
    Login: POST email and password, get a JWT bearer token (res JWT token)
    adminUserData: Admins GET full listing of user data (res userData listing)
    userAccount: Users GET own account details (res account details)
    

User uploads can:

    crashes: Admins POST crash data to be managed by server admins(res 200 OK)
    quizContent: Admins POST quiz data to be managed by server admins (res 200 OK)
    userQuizResult: Users POST quiz result to update highscore (res current highscore)


Routers are to named controllers, which handle details