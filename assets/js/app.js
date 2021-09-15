var app = angular.module('AsterixApp', []);

app.controller('ComicController', function($scope) {
    $scope.comicCount = 0;

    $scope.comics = [
        "assets/images/comics/asterix.png",
        "assets/images/comics/batman.png",
        "assets/images/comics/deadpool.png",
        "assets/images/comics/luky_luke.png",
        "assets/images/comics/persepolis.png",
        "assets/images/comics/tintin.png"
    ]

    $scope.previous = function() {
        if ($scope.comicCount > 0)
            $scope.comicCount = $scope.comicCount - 1;
        else
            $scope.comicCount = 0;
    }

    $scope.next = function() {
        if ($scope.comicCount < 5)
            $scope.comicCount = $scope.comicCount + 1;
        else
            $scope.comicCount = 5;
    }

});