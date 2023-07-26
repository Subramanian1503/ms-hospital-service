const express = require("express");

const SERVICE_PORT = 8080;

const application = express();

application.listen(SERVICE_PORT, (error) => {
    if (error) {
        console.log(`*** Error occurred while trying to make hospital server up ***`);
        return;
    }

    console.log(`*** Hospital server started successfully at port: ${SERVICE_PORT}`);
})