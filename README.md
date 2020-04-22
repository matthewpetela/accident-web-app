## _**Overview of project with features **_

  This website’s function is to compare traffic conditions and accidents from different cities. It also provides the general ranking of cities, a weather report, and driving test quiz. To make the website easier to navigate for clients, we decided to have three features that the client can select depending on his or her needs. 
The first option will let the user choose a city and then compare it with four different cities. The comparison will provide information about the number of accidents, weather, and ranking.

The second option will provide the user with a general ranking of the cities, ordered by their number of accidents. It will have a chart and a graph for the user to easily visualize their chosen city’s statistics.

The third option will provide the user with sample driving test questions where they can test their understanding of the driving rules. If the user does well, they will receive a star to encourage the user to complete more quizzes. Users that do especially well on these quizzes may qualify for insurance deductions.

Those three options are the core of the website. However there are other features that special users can have access to, such as admin privileges where the user can have access to insurance data and all other databases. We will also have a tab named “About Us” where the user will see the mission of the company and its job and responsibilities. 

## _**LIST of API**_

Dark Sky API - Requests are made to[https://api.darksky.net/forecast/apiKey/](https://api.darksky.net/forecast/apiKey/), with the coordinates as an argument. For example, to get the weather information on Dallas, a GET request is made to [https://api.darksky.net/forecast/0f8e93980168dda45bd651f9c01a18a7/32.8978,-97.0189](https://api.darksky.net/forecast/0f8e93980168dda45bd651f9c01a18a7/32.8978,-97.0189), which will then return the full JSON file for current weather in Dallas.

Collating average weather normals was performed using a file parsing script on data from https://www.ncdc.noaa.gov/data-access/land-based-station-data/land-based-datasets/climate-normals/1981-2010-normals-data, particularly the ftp server from ftp://ftp.ncdc.noaa.gov/pub/data/normals/1981-2010/. 

Bulk city weather averages require paid geocoding services for locations listed in crash data reports to find closest weather stations from the NOAA. Also, calculating cities with similar temperatures is O(n^2), so it should be calculated sparingly.

## _**Project Handoff**_

Here are some project guideline handoff:
config variables are found in server/config/config.js. The variables are
MongoURI: Integrate your chosen MongoDB solution here
secretOrKey: The key used for user password encryption. Keep it long, random, and secret(!). 
darkSkyKey: Create a developer account and choose the data servicing plan that will provide weather reports for the website's traffic of the users.

To maintain security admin accounts must be manually created by the system administrator. First a regular account should be created. Then the administrator must go into MongoDB and edit the admin field to true for that user.

To deploy the heroku app the first thing you need to do is to create a heroku account [https://www.heroku.com](https://www.heroku.com). Just make sure when creating the account  for the primary development language select node.js. Once logged in click on new button which will allow you to create a new app. Type the name of the app you like. To run the app first make sure you downloaded the Heroku CLI. Once that is done type the following command git init , heroku git : remote -a < replace this with app name>. . to deploy the application  just write the $ git add $ git commit -m ‘’message’’ $ git push heroku master. Once you have done that you can click on the top right corner open app and the web app should be functional

## _other important readme file for the backend and the server folder**_

controller: [https://github.com/matthewpetela/accident-web-app/blob/master/server/controllers/controllerREADME.md]

Routes: [https://github.com/matthewpetela/accident-web-app/blob/master/server/routes/routerREADME.md]


model: [https://github.com/matthewpetela/accident-web-app/blob/master/server/models/modelsREADME.md] 



### _**IMPORTANT NOTES**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".

This project contains an example project board meant to showcase how one can be used. The issues posted to it are not real issues.

## Getting Started
This repository aims to assist you in beginning work on a MERN stack application for heroku deployment with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams by clicking the green "Use this template" button above.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json. Alternatively your group may choose to simplify this process by using yarn workspaces as specified [here](https://yarnpkg.com/lang/en/docs/workspaces/).

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 


## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development. If you are interested in how this works follow the nodemon In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Learn More
To learn how to setup a local MongoDB instance for testing, check out how to [connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
