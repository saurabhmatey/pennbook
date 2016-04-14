/**
 * Created by Anantha on 3/24/16.
 */
(function () {
    angular
        .module("PennBook")
        .controller("TimelineController", TimelineController);

    function TimelineController($scope, $rootScope, $location, PostService) {

        $scope.user = $rootScope.user;
        $scope.location = "";
        $scope.postObj = "";
        console.log($rootScope.user + "\n in timeline controller");

        $scope.logout = logout;
        $scope.submitPost = submitPost;
        

        function logout(){

            var w = $(window).width();
            //console.log(w);
            //$scope.location = "/login";
            console.log("logged value" + $rootScope.user.logged);
            $scope.user.logged = false;
            console.log("logged value" + $rootScope.user.logged);
            delete $rootScope.user;
            console.log($rootScope.user);
            $location.url('#/login');

            console.log('after logout');


        }
// #3b5998 blue
// #ff766c pink
        
        function submitPost(postContent){

            if(postContent != " " && postContent != null) {
                var postObject = {
                    userid: $scope.user._id,
                    content: postContent,
                }

                PostService.createPost(postObject).then(function (response) {
                    console.log(response);
                });

                PostService.getPosts(postObject.userid).then(function (res) {
                    $rootScope.user.posts = res;
                    console.log($rootScope.user.posts);
                });

                $location.url('/timeline/' + $rootScope.user._id);
            }

        }


    }
})();