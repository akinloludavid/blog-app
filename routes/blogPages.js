const express = require('express')
const router = express.Router()


router.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'Create a new blog'
  });
});

router.get('/', (req, res) => {
  res.redirect('/b/blogs');
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

module.exports = router