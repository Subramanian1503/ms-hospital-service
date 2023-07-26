const mongoose = require("mongoose");

// Connect with mongoDB using URL with mongoose
mongoose.connect("mongodb+srv://admin:atlasadmin123@employee-performance-tr.phxxqrk.mongodb.net/?retryWrites=true&w=majority");

const db_connection = mongoose.connection;

db_connection.on("error",
    console.error.bind(console, "*** Error occured while trying to connect with database ***"));

db_connection.once("open", () => {
    console.log("*** Server connected with hospital database successfully ***");
})

