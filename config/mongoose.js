// Get mongoose to define the mongo DB connect configuration
const mongoose = require("mongoose");

// Connect with mongoDB using URL with mongoose
mongoose.connect("mongodb+srv://admin:atlasadmin123@employee-performance-tr.phxxqrk.mongodb.net/?retryWrites=true&w=majority");


// Get the created mongo connection defined
const db_connection = mongoose.connection;

// If the connection status is error show error log message
db_connection.on("error",
    console.error.bind(console, "*** Error occured while trying to connect with database ***"));

// If the connection is open show success log message
db_connection.once("open", () => {
    console.log("*** Server connected with hospital database successfully ***");
})

