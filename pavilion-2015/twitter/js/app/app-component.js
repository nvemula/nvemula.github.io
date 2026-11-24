var app = angular.module("twitterApp");
app.controller("tweetListController", function($scope, $http) {

    $scope.getTweets = function () {
        var id = $scope.searchById;
        $http.get("https://palate-1301.appspot.com/_ah/api/fitl/v1/restaurant/"+id).then(function (response) {
          $scope.restaurant = response.data;
          $scope.restaurant.id = id;
          console.log($scope.response);
        });
    }

});
