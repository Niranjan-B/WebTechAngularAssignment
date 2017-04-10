var app = angular.module("webApp", ['ngSanitize','ngAnimate','ui.bootstrap']);
app.controller('controlNinja', function($scope, $http) {

    // hide tab content or detail content
    $scope.hideTabContent = false;
    $scope.hideDetailContent = true;
    var idDetail;
    var idDetailType;
    var idDetailName;
    var idDetailPicURL;

    $scope.hideProgessBar = true;
    $scope.hideProgressBarAlbums = false;
    $scope.hideProgressBarPosts = false;

    $scope.changeState = function() {
        if ($scope.hideTabContent) {
            $scope.hideTabContent = false;
            $scope.hideDetailContent = true;
        }   
    }

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

    // variables related to pages tab
    $scope.hideNextButtonPagesTab = true;
    $scope.hidePreviousButtonPagesTab = true;
    var nextPageUrlPagesTab;
    var previousPageUrlPagesTab;

    // variables for events tabs
    $scope.hideNextButtonEventsTab = true;
    $scope.hidePreviousButtonEventsTab = true;
    var nextPageUrlEventsTab;
    var previousPageUrlEventsTab;

    // variables for places tab
    $scope.hideNextButtonPlacesTab = true;
    $scope.hidePreviousButtonPlacesTab = true;
    var nextPageUrlPlacesTab;
    var previousPageUrlPlacesTab;

    // variables for groups tab
    $scope.hideNextButtonGroupsTab = true;
    $scope.hidePreviousButtonGroupsTab = true;
    var nextPageUrlGroupsTab;
    var previousPageUrlGroupsTab;
    
    $scope.submit = function() {
        $scope.hideProgessBar = false;

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

                    if (response.data.paging.next != null) {
                        nextPageUrlPagesTab = response.data.paging.next;
                        $scope.hideNextButtonPagesTab = false;
                    } else {
                        $scope.hideNextButtonPagesTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlPagesTab = response.data.paging.previous;
                        $scope.hidePreviousButtonPagesTab = false;
                    } else {
                        $scope.hidePreviousButtonPagesTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=events&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideEventsTable = false;
                    $scope.events = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlEventsTab = response.data.paging.next;
                        $scope.hideNextButtonEventsTab = false;
                    } else {
                        $scope.hideNextButtonEventsTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlEventsTab = response.data.paging.previous;
                        $scope.hidePreviousButtonEventsTab = false;
                    } else {
                        $scope.hidePreviousButtonEventsTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=places&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePlacesTable = false;
                    $scope.places = response.data.data;

                    if (response.data.paging !== undefined  && response.data.paging.next != null) {
                        nextPageUrlPlacesTab = response.data.paging.next;
                        $scope.hideNextButtonPlacesTab = false;
                    } else {
                        $scope.hideNextButtonPlacesTab = true;
                    }
                    if (response.data.paging !== undefined && response.data.paging.previous != null) {
                        previousPageUrlPlacesTab = response.data.paging.previous;
                        $scope.hidePreviousButtonPlacesTab = false;
                    } else {
                        $scope.hidePreviousButtonPlacesTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });
            $http.get("https://php-gae-161219.appspot.com/?search_type=groups&searched_keyword="+$scope.query ,
                     { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideGroupsTable = false;
                    $scope.groups = response.data.data;

                    $scope.hideProgessBar = true;

                    if (response.data.paging !== undefined  && response.data.paging.next != null) {
                        nextPageUrlGroupsTab = response.data.paging.next;
                        $scope.hideNextButtonGroupsTab = false;
                    } else {
                        $scope.hideNextButtonGroupsTab = true;
                    }
                    if (response.data.paging !== undefined && response.data.paging.previous != null) {
                        previousPageUrlGroupsTab = response.data.paging.previous;
                        $scope.hidePreviousButtonGroupsTab = false;
                    } else {
                        $scope.hidePreviousButtonGroupsTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });
            

        } else {
            $scope.isTooltipOpen = true;
        }
    }

    //-------------------------------------------- users tab functions ------------------------------------------------------------
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

    // ----------------------------------------pages tab functions ------------------------------------------------------------
        $scope.onNextButtonClickedPagesPage = function() {
        $http.get(nextPageUrlPagesTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePagesTable = false;
                    $scope.pages = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlPagesTab = response.data.paging.next;
                        $scope.hideNextButtonPagesTab = false;
                    } else {
                        $scope.hideNextButtonPagesTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlPagesTab = response.data.paging.previous;
                        $scope.hidePreviousButtonPagesTab = false;
                    } else {
                        $scope.hidePreviousButtonPagesTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });   
        }
        $scope.onPreviousButtonClickedPagesPage = function() {
        $http.get(previousPageUrlPagesTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePagesTable = false;
                    $scope.pages = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlPagesTab = response.data.paging.next;
                        $scope.hideNextButtonPagesTab = false;
                    } else {
                        $scope.hideNextButtonPagesTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlPagesTab = response.data.paging.previous;
                        $scope.hidePreviousButtonPagesTab = false;
                    } else {
                        $scope.hidePreviousButtonPagesTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });   
        }
    
    // -------------------------------------------- functions for events tab --------------------------------------------
       $scope.onNextButtonClickedPlacesPage = function() {
        $http.get(nextPageUrlPlacesTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePlacesTable = false;
                    $scope.places = response.data.data;

                    if (response.data.paging !== undefined && response.data.paging.next != null) {
                        nextPageUrlPlacesTab = response.data.paging.next;
                        $scope.hideNextButtonPlacesTab = false;
                    } else {
                        $scope.hideNextButtonPlacesTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlPlacesTab = response.data.paging.previous;
                        $scope.hidePreviousButtonPlacesTab = false;
                    } else {
                        $scope.hidePreviousButtonPlacesTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });   
        }
        $scope.onPreviousButtonClickedPlacesPage = function() {
        $http.get(previousPageUrlPlacesTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hidePlacesTable = false;
                    $scope.places = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlPlacesTab = response.data.paging.next;
                        $scope.hideNextButtonPlacesTab = false;
                    } else {
                        $scope.hideNextButtonPlacesTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlPlacesTab = response.data.paging.previous;
                        $scope.hidePreviousButtonPlacesTab = false;
                    } else {
                        $scope.hidePreviousButtonPlacesTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });   
        }

    // ------------------------------------------ functions for places tab -------------------------------------------
     $scope.onNextButtonClickedEventsPage = function() {
        $http.get(nextPageUrlEventsTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideEventsTable = false;
                    $scope.events = response.data.data;

                    if (response.data.paging !== undefined && response.data.paging.next != null) {
                        nextPageUrlEventsTab = response.data.paging.next;
                        $scope.hideNextButtonEventsTab = false;
                    } else {
                        $scope.hideNextButtonEventsTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlEventsTab = response.data.paging.previous;
                        $scope.hidePreviousButtonEventsTab = false;
                    } else {
                        $scope.hidePreviousButtonEventsTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });   
        }
        $scope.onPreviousButtonClickedEventsPage = function() {
        $http.get(previousPageUrlEventsTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideEventsTable = false;
                    $scope.events = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlEventsTab = response.data.paging.next;
                        $scope.hideNextButtonEventsTab = false;
                    } else {
                        $scope.hideNextButtonEventsTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlEventsTab = response.data.paging.previous;
                        $scope.hidePreviousButtonEventsTab = false;
                    } else {
                        $scope.hidePreviousButtonEventsTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });   
        }
    
    // ----------------------------------------- functions for groups tab ----------------------------------------------------
    $scope.onNextButtonClickedGroupsPage = function() {
        $http.get(nextPageUrlGroupsTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideGroupsTable = false;
                    $scope.groups = response.data.data;

                    if (response.data.paging !== undefined && response.data.paging.next != null) {
                        nextPageUrlGroupsTab = response.data.paging.next;
                        $scope.hideNextButtonGroupsTab = false;
                    } else {
                        $scope.hideNextButtonGroupsTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlGroupsTab = response.data.paging.previous;
                        $scope.hidePreviousButtonGroupsTab = false;
                    } else {
                        $scope.hidePreviousButtonGroupsTab = true;
                    }
                 }, function (error){
                    console.log(error);
                 });   
        }
        $scope.onPreviousButtonClickedGroupsPage = function() {
        $http.get(previousPageUrlGroupsTab , { headers: { 'Access-Control-Allow-Origin':'*' } })
                 .then(function (response) {
                    $scope.hideGroupsTable = false;
                    $scope.groups = response.data.data;

                    if (response.data.paging.next != null) {
                        nextPageUrlGroupsTab = response.data.paging.next;
                        $scope.hideNextButtonGroupsTab = false;
                    } else {
                        $scope.hideNextButtonGroupsTab = true;
                    }
                    if (response.data.paging.previous != null) {
                        previousPageUrlGroupsTab = response.data.paging.previous;
                        $scope.hidePreviousButtonGroupsTab = false;
                    } else {
                        $scope.hidePreviousButtonGroupsTab = true;
                    }

                 }, function (error){
                    console.log(error);
                 });   
        }


    function swapHiddenViews() {
        $scope.hideTabContent = !$scope.hideTabContent;
        $scope.hideDetailContent = !$scope.hideDetailContent;
    }

    // --------------------------------------------------- detail's ----------------------------------------------------
    $scope.showDetailsOfUsers = function(id) {

        if (id.user !== undefined) {
            idDetail = id.user.id;
            idDetailType = "users";
        } else if (id.page !== undefined) {
            idDetail = id.page.id;
            idDetailType = "pages";
        } else if (id.event !== undefined) {
            idDetail = id.event.id;
            idDetailType = "events";
        } else if (id.place !== undefined) {
            idDetail = id.place.id;
            idDetailType = "places";
        } else if (id.group !== undefined) {
            idDetail = id.group.id;
            idDetailType = "groups";
        } else if (id.localBlob !== undefined) {
            idDetail = id.localBlob.id;
        }
        
        swapHiddenViews();
        
        // make http request
        $http.get("https://php-gae-161219.appspot.com/?search_type=details&searched_keyword=" + idDetail, 
                {headers:{ 'Access-Control-Allow-Origin':'*' }})
                .then(function(response){
                    $scope.hideProgressBarAlbums = true;
                    $scope.hideProgressBarPosts = true;
                    $scope.albumDetails = null;
                    $scope.postsDetails = null;

                    if (response.data.albums === undefined) {
                        $scope.albumDetails = undefined;    
                    } else {
                        $scope.albumDetails = response.data.albums.data;
                    }
                    
                    if (response.data.posts === undefined) {
                        $scope.postsDetails = undefined;    
                    } else {
                        $scope.postsDetails = response.data.posts.data;
                    }

                    $scope.name = response.data.name;
                    idDetailName = response.data.name;
                    $scope.pictureUrl = response.data.picture.data.url;
                    idDetailPicURL = response.data.picture.data.url;
                }, function(error){
                    console.log(error);
                });
    }

    $scope.goBack = function() {
        swapHiddenViews();
    }
    
    // -------------------------------------------------- CRUD of clicked blob -------------------------------------------------------
    function refreshLocalStorage() {
        var jsonData = [];
        for (var i=0; i<localStorage.length; i++) {
            jsonData.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        return jsonData;
    }
    
    $scope.saveToUsersStorage = function(object) {
        if (localStorage.getItem(object.user.id) !== null) {
            localStorage.removeItem(object.user.id);
        } else {
            var blobToStore = {
                type: "users",
                id: object.user.id,
                name: object.user.name,
                picUrl: object.user.picture.data.url
            };
            localStorage.setItem(object.user.id, JSON.stringify(blobToStore));
        }
        $scope.localStoredData = refreshLocalStorage();
    }
    $scope.saveToPagesStorage = function(object) {
        if (localStorage.getItem(object.page.id) !== null) {
            localStorage.removeItem(object.page.id);
        } else {
            var blobToStore = {
                type: "pages",
                id: object.page.id,
                name: object.page.name,
                picUrl: object.page.picture.data.url
            };
            localStorage.setItem(object.page.id, JSON.stringify(blobToStore));
        }
        $scope.localStoredData = refreshLocalStorage();
    }
    $scope.saveToEventsStorage = function(object) {
        if (localStorage.getItem(object.event.id) !== null) {
            localStorage.removeItem(object.event.id);
        } else {
            var blobToStore = {
                type: "events",
                id: object.event.id,
                name: object.event.name,
                picUrl: object.event.picture.data.url
            };
            localStorage.setItem(object.event.id, JSON.stringify(blobToStore));
        }
        $scope.localStoredData = refreshLocalStorage();
    }
    $scope.saveToPlacesStorage = function(object) {
        if (localStorage.getItem(object.place.id) !== null) {
            localStorage.removeItem(object.place.id);
        } else {
            var blobToStore = {
                type: "places",
                id: object.place.id,
                name: object.place.name,
                picUrl: object.place.picture.data.url
            };
            localStorage.setItem(object.place.id, JSON.stringify(blobToStore));
        }
        $scope.localStoredData = refreshLocalStorage();
    }
    $scope.saveToGroupsStorage = function(object) {
        if (localStorage.getItem(object.group.id) !== null) {
            localStorage.removeItem(object.group.id);
        } else {
            var blobToStore = {
                type: "groups",
                id: object.group.id,
                name: object.group.name,
                picUrl: object.group.picture.data.url
            };
            localStorage.setItem(object.group.id, JSON.stringify(blobToStore));
        }
        $scope.localStoredData = refreshLocalStorage();
    }
    
    $scope.getAllItems = function() {
        $scope.localStoredData = refreshLocalStorage();
    }
    $scope.deleteClickedItem = function(obj) {
        localStorage.removeItem(obj.localBlob.id);
        $scope.localStoredData = refreshLocalStorage();
    }

    // function to check if the favorited data is already present in localStorage
    $scope.isIdPresentInUsersStore = function(object) {
        return localStorage.getItem(object.user.id) === null ? false : true;
    }
    $scope.isIdPresentInPagesStore = function(object) {
        return localStorage.getItem(object.page.id) === null ? false : true;
    }
    $scope.isIdPresentInEventsStore = function(object) {
        return localStorage.getItem(object.event.id) === null ? false : true;
    }
    $scope.isIdPresentInPlacesStore = function(object) {
        return localStorage.getItem(object.place.id) === null ? false : true;
    }
    $scope.isIdPresentInGroupsStore = function(object) {
        return localStorage.getItem(object.group.id) === null ? false : true;
    }

    // function to check if the detail view is present in the local storage
    $scope.isIdPresentInGeneralStore = function() {
        return localStorage.getItem(idDetail) === null ? false : true;
    }
    // function to add/remove from local store for details page
    $scope.addRemoveFromGeneralStoreDetail = function() {
        if (localStorage.getItem(idDetail) !== null) {
            localStorage.removeItem(idDetail);
        } else {
            var blobToStore = {
                type: idDetailType,
                id: idDetail,
                name: idDetailName,
                picUrl: idDetailPicURL
            };
            localStorage.setItem(idDetail, JSON.stringify(blobToStore));
        }
        $scope.localStoredData = refreshLocalStorage();
    }
});