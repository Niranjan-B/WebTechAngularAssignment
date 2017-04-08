var app = angular.module("webApp", ['ui.bootstrap']);
app.controller('controlNinja', function($scope, $http) {

    // change the way tooltip looks later on
    $scope.isTooltipOpen = false;

    $scope.hideUserTable = true;
    $scope.hidePagesTable = true;
    $scope.hideEventsTable = true;
    $scope.hidePlacesTable = true;
    $scope.hideGroupsTable = true;
    $scope.hideFavoritesTable = true;

    $scope.hideNextButtonUsersTab = true;
    $scope.hidePreviousButtonUsersTab = true;

    var nextPageUrlUsersTab;
    var previousPageUrlUsersTab;
    
    $scope.submit = function() {
        if ($scope.query) {
            $scope.isTooltipOpen = false;

            // make a get request here to fetch all data
            $http.get("https://php-gae-161219.appspot.com/?search_type=users&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideUserTable = false;
                    $scope.users = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlUsersTab = response.data.paging.next;
                        $scope.hideNextButtonUsersTab = false;
                    } else {
                        $scope.hideNextButtonUsersTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlUsersTab = response.data.paging.previous;
                        $scope.hidePreviousButtonUsersTab = false;
                    } else {
                        $scope.hidePreviousButtonUsersTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=pages&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePagesTable = false;
                    $scope.pages = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=events&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideEventsTable = false;
                    $scope.events = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=places&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePlacesTable = false;
                    $scope.places = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=groups&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideGroupsTable = false;
                    $scope.groups = response.data.data;
                 }, function (error){
                    console.log(error);
                 });
            

        } else {
            $scope.isTooltipOpen = true;
        }
    }

    $scope.onNextButtonClickedUsersPage = function() {
        $http.get(nextPageUrlUsersTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideUserTable = false;
                    $scope.users = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlUsersTab = response.data.paging.next;
                        $scope.hideNextButtonUsersTab = false;
                    } else {
                        $scope.hideNextButtonUsersTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlUsersTab = response.data.paging.previous;
                        $scope.hidePreviousButtonUsersTab = false;
                    } else {
                        $scope.hidePreviousButtonUsersTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });   
    }
    $scope.onPreviousButtonClickedUsersPage = function() {
        $http.get(previousPageUrlUsersTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideUserTable = false;
                    $scope.users = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlUsersTab = response.data.paging.next;
                        $scope.hideNextButtonUsersTab = false;
                    } else {
                        $scope.hideNextButtonUsersTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlUsersTab = response.data.paging.previous;
                        $scope.hidePreviousButtonUsersTab = false;
                    } else {
                        $scope.hidePreviousButtonUsersTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });   
    }

});