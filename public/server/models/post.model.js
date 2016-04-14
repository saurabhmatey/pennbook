/**
 * Created by Anantha on 4/8/16.
 */
var q = require("q");

module.exports = function(app,mongoose,db,PostSchema){

    var PostModel = mongoose.model("PostModel",PostSchema);
    var api;

    api = {
        create: create,
        getAllPostsByUserId: getAllPostsByUserId,
        getAllPosts: getAllPosts
    };

    return api;

    function create(post){
        var deferred = q.defer();
        var newPost = post;
        PostModel.create(newPost, function(err, post){
            deferred.resolve(post);
        });

        return deferred.promise;
    }

    function getAllPostsByUserId(userid) {

        var deferred = q.defer();
        //PostModel.find(userid,function(err , results){
        //    deferred.resolve(results);
        //});

        PostModel.find(userid)
            .sort({'postTime': 'desc'})
            .exec(function(err, results) {
                deferred.resolve(results);
            });

        return deferred.promise;
    }

    function getAllPosts(){

        var deferred = q.defer();

        PostModel.find(function(err , results){
            deferred.resolve(results);
        });
        return deferred.promise;
    }


};