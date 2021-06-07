const express = require('express');
const morgan = require('morgan');

const blogRoute = require('./routes/blogRoutes')
const blogPages = require('./routes/blogPages')

const connectDB = require('./database/connection')
// express app
const app = express();
app.use(express.json())
require('dotenv').config({
  path:'./config.env'
})
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


app.use('/', blogPages)
app.use('/b', blogRoute)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});
const port = process.env.PORT || 4500;
app.listen(port)

