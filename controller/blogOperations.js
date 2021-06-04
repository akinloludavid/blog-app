const Blog = require('../models/blog');

const getAllPosts = (req, res) => {
  Blog.find().sort({
      createdAt: -1
    })
    .then(result => {
      res.render('index', {
        blogs: result,
        title: 'All blogs'
      });
    })
    .catch(err => {
      console.log(err);
    });
}

const getOnePost = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(result => {
      res.render('details', {
        blog: result,
        title: 'Blog Details'
      })
    })
    .catch(err => {
      console.log(err.message)
    })
}

const createPost = (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
    .then((result) => {
      res.redirect('/b/blogs')
    })
    .catch(error => {
      console.log(error.message)
    })
}

const deletePost = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({
        redirect: "/b/blogs"
      })
    })
    .catch(error => {
      console.log(error.message)
    })
}

module.exports = {getAllPosts, getOnePost, createPost, deletePost}