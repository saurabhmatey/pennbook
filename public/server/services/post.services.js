/**
 * Created by Anantha on 4/8/16.
 */
module.exports = function (app,model) {

    app.post('/api/post', CreateNewPost);
    app.get('/api/post?', getAllPostsByUserId);
    app.get('/api/post/getAllPosts', getAllPosts);

    function CreateNewPost(req, res) {

        var post = req.body;
        model
            .create(post)
            .then(function(newPost){
                res.json(newPost);
        });
    }

    function getAllPostsByUserId(req, res) {
        console.log('i reached post api service');

        var userid = req.body;

        model
            .getAllPostsByUserId(userid)
            .then(function (posts) {
                    res.json(posts);
                }
            );
    }

    function getAllPosts(req, res){

        model
            .getAllPosts()
            .then(function (posts) {
                res.json(posts);
            });
    }

};



