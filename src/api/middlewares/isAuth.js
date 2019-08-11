const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const AuthService = require("../../services/auth");
const extractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};

jwtOptions.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
jwtOptions._secretOrKeyProvider = "sachin";

const strategy = new JwtStrategy(jwtOptions, async (payload, next) => {
	console.log(payload);
	const { user } = await AuthService.findIfUserExists(payload.id);
	if (user) {
		next(null, user);
	} else {
		next(null, false);
	}
});
passport.use(strategy);
