/**
 * Created by Anantha on 4/8/16.
 */
(function () {

    angular
        .module("PennBook")
        .factory("PostService", PostService);

    console.log("In post service!!!");

    function PostService($rootScope, $http, $q) {
        
        var service = {
            createPost: createPost,
            getPosts: getAllPostsByUserId,
            getAllPosts: getAllPosts
        }

        return service;
        
        function createPost(post) {
            var deferred = $q.defer();
            $http.post("/api/post", post)
                .success(function(response){
                    deferred.resolve(response);
                })

            return deferred.promise;
        }
        
        function getAllPostsByUserId(userid) {
            var deferred = $q.defer();
            $http.get("/api/post?userid="+userid)
                .success(function (response) {
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function getAllPosts(){
            var deferred = $q.defer();
            $http.get("/api/post/getAllPosts")
                .success(function (response) {
                    deferred.resolve(response);
                });

            return deferred.promise;
        }
    }
})();