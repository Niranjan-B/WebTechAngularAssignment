var app = angular.module("webApp", ['ui.bootstrap']);
app.controller('controlNinja', function($scope, $http) {

    // change the way tooltip looks later on
    $scope.isTooltipOpen = false;

    //$scope.showUserTable = "false";
    
    $scope.submit = function() {
        if ($scope.query) {
            $scope.isTooltipOpen = false;

            // make a get request here to fetch all data
            $http.get("https://php-gae-161219.appspot.com/?search_type=users&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.users = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=pages&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.pages = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=events&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.events = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=places&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.places = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=groups&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.groups = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            

        } else {
            $scope.isTooltipOpen = true;
        }
    }
});