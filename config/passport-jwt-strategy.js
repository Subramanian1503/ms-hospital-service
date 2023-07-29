const Doctor = require("../models/doctor");

// Get the required strategy to use for authentication and jwt extraction from library
const passport = require("passport");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

// Define from which header we need to extact JWT token
let options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "Codeial",
}

// Configuring a middleware in passport to use the implementation to find the user is authorized
passport.use(new JWTstrategy(options, async (jwt_payload, done) => {
    try {
        // Check if the jwt payload exists in doctor DB
        const doctorId = jwt_payload.id;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            // Else return false
            done(null, false);
        } else {

            // If yes then return user to the middleware
            done(null, doctor);
        }
    } catch (error) {
        // if some runtime error occured log it and pass it to the passport
        done(error, false);
    }
}));

module.exports = passport;
