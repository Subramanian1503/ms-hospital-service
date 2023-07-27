const express = require("express");

const SERVICE_PORT = 8080;

const application = express();

// Intialising express application with body parser
application.use(express.json());
application.use(express.urlencoded());

// Initialising the database connection with express applicaton
const db_config = require("./config/mongoose");

// Setting up the main route to the middle ware
const main_router = require("./routes");
application.use("/", main_router);

// Initialising the passport JWT authentication configuration with express applicaton
const passport_jwt_config = require("./config/passport-jwt");

application.listen(SERVICE_PORT, (error) => {
    if (error) {
        console.log(`*** Error occurred while trying to make hospital server up ***`);
        return;
    }

    console.log(`*** Hospital server started successfully at port: ${SERVICE_PORT} ***`);
})