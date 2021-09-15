var app = angular.module('AsterixApp', []);

app.controller('ComicController', function($scope) {
    $scope.comicsCount = 0;

    $scope.comics = [
        "assets/images/comics/asterix.png",
        "assets/images/comics/batman.png",
        "assets/images/comics/deadpool.png",
        "assets/images/comics/luky_luke.png",
        "assets/images/comics/persepolis.png",
        "assets/images/comics/tintin.png",
    ]
});