const express = require('express')
const router = express.Router()
const {getAllPosts, getOnePost, createPost, deletePost} = require('../controller/blogOperations')



// blog routes

router.get('/blogs', getAllPosts);

router.post('/blogs', createPost)

router.get('/blogs/:id', getOnePost)

router.delete('/blogs/:id', deletePost)
module.exports = router