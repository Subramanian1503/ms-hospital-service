const express = require("express");

// Initialise the port of the application
const SERVICE_PORT = 8080;


// Get the express application
const application = express();

// Initialising the database connection with express applicaton
const db_config = require("./config/mongoose");

// Initialising the passport JWT authentication configuration with express applicaton
const passport = require("passport");
const passport_jwt_config = require("./config/passport-jwt-strategy");


// Intialising express application with body parser
application.use(express.json());
application.use(express.urlencoded());

// Setting up the main route to the middle ware
const main_router = require("./routes");
application.use("/", main_router);

application.listen(SERVICE_PORT, (error) => {
    if (error) {

        // Log error message if the server was not up
        console.log(`*** Error occurred while trying to make hospital server up ***`);
        return;
    }

    // Log success error message if the servcer was started successfully
    console.log(`*** Hospital server started successfully at port: ${SERVICE_PORT} ***`);
})