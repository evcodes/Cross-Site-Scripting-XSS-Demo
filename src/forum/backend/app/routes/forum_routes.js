let Post = require('../models/forumPost.model')

module.exports = function(app,db){

    let post = new Post()
    app.post('/forum', (req, res) => {
        //create a forum post
        
        const forumPost = {
            title: req.body.title,
            text: req.body.body
        };
        //adding a new post to the forum database
        db.db().collection('forum').insertOne(forumPost, (err, result) => {
            if (err){ 
                res.send({"Error": "An error has occurred"})
            } else{
                res.send(result.ops[0]);
            }
        })
    })
}