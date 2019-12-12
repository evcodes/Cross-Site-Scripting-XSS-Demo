const express = require('express');
const router = express.Router();

let Post = require('../../models/forumPost.model');

// @route   GET api/forum
// @desc    Get All Posts
// @access  Public
router.get('/', (req, res) => {
    Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts));
});

// @route   POST api/forum
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    
    // make a new post with the form data submitted
    let post = new Post({
        title: req.body.title,
        body: req.body.body
    });
    
    post.save().then(item => res.json(item));
});

// @route   GET api/forum/postID
// @desc    Retrieve a post by ID
// @access  Public
router.get('/:id', (req, res) => {
    Post.findById({_id : req.params.id})
    .then(postFound => {
        if (!postFound){
            return( res.status(404).end())
        }
        return (res.status(200).json(postFound));
    })
})

module.exports = router;