// Get the required strategy to use for authentication and jwt extraction from library
const passport = require("passport");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractStrategy = require("passport-jwt").ExtractJwt;

// Define from which header we need to extact JWT token
let options = {
    jwtFromRequest: ExtractStrategy.fromAuthHeaderAsBearerToken,
    secretOrKey: "MakeYourSelfBusy",
}

// Configuring a middleware in passport to use the implementation to find the user is authorized
passport.use(new JWTstrategy(options, (jwtPayLoad, done) => {

    // Check if the jwt payload exists in doctor DB

    // If yes then return user to the middleware
 
    // Else return false
}))

module.exports = passport;
