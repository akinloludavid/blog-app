const express = require('express');
const morgan = require('morgan');
const passport = require('passport')
const blogRoute = require('./routes/blogRoutes')
const blogPages = require('./routes/blogPages')

const connectDB = require('./database/connection')
// express app
const app = express();
app.use(express.json())

connectDB()

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

require('./authenticate')

app.use('/', blogPages)
app.use('/b', blogRoute)
app.use(passport.initialize())
app.get('/google', passport.authenticate('google', {scope:'profile'}))
app.get('/google/callback', passport.authenticate('google', {failureRedirect:'/login'}), (req, res)=>{
  //res.redirect('/')
  res.send('logged in')
})
// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});
const port = process.env.PORT || 4500;
app.listen(port)

