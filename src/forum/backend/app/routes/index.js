const forumRoutes = require('./forum_routes')

module.exports = function(app,db){
    forumRoutes(app,db);
}