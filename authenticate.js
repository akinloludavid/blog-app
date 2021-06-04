const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done)=>{
  done(null, user.id)
})


passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: "414177377643-h8jb32omnl2nk712eche3fotc7tv477n.apps.googleusercontent.com",
    clientSecret: "iVE8H9JePvV7hlJpsP80Hyw-",
    callbackURL: "http://localhost:4500/google/callback",
    passReqToCallback: true
  },
  function (request, accessToken, refreshToken, profile, cb) {
    
    console.log(profile)
    cb(null, profile)
  }
));