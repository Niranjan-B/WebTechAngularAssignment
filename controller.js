var app = angular.module("webApp", ['ngSanitize','ngAnimate','ui.bootstrap']);
app.controller('controlNinja', function($scope, $http) {

    // hide tab content or detail content
    $scope.hideTabContent = false;
    $scope.hideDetailContent = true;
    var idDetail;

    // change the way tooltip looks later on
    $scope.isTooltipOpen = false;

    $scope.hideUserTable = true;
    $scope.hidePagesTable = true;
    $scope.hideEventsTable = true;
    $scope.hidePlacesTable = true;
    $scope.hideGroupsTable = true;
    $scope.hideFavoritesTable = true;

    // variables related to users tab
    $scope.hideNextButtonUsersTab = true;
    $scope.hidePreviousButtonUsersTab = true;

    var nextPageUrlUsersTab;
    var previousPageUrlUsersTab;
    
    $scope.submit = function() {
        if ($scope.hideTabContent) {
            $scope.hideTabContent = false;
            $scope.hideDetailContent = true;
        }

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
    function swapHiddenViews() {
        $scope.hideTabContent = !$scope.hideTabContent;
        $scope.hideDetailContent = !$scope.hideDetailContent;
    }

    $scope.showDetailsOfUsers = function(id) {
        idDetail = id.user.id;
        swapHiddenViews();
        
        // make http request
        $http.get("https://php-gae-161219.appspot.com/?search_type=details&searched_keyword=" + 353851465130, 
                {headers:{ 'Access-Control-Allow-Origin':'*' }})
                .then(function(response){
                    $scope.albumDetails = response.data.albums.data;
                    $scope.postsDetails = response.data.posts.data;
                }, function(error){
                    console.log(error);
                });

    }

    $scope.goBack = function() {
        swapHiddenViews();
    }

});