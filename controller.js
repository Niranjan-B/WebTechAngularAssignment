var app = angular.module("webApp", ['ui.bootstrap']);
app.controller('controlNinja', function($scope) {

    $scope.isTooltipOpen = false;
    
    $scope.submit = function() {
        if ($scope.query) {
            $scope.isTooltipOpen = false;
        } else {
            $scope.isTooltipOpen = true;
        }
    }
});