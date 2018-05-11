'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieManiaApp
 */

//inject a service ==> routParams - to get id from url.
angular.module('movieManiaApp')
  .controller('MovieCtrl', function ($scope, $routeParams) {

    console.log($routeParams.id);
    console.log($routeParams.slug);

    let id = parseInt($routeParams.id, 10);

    let movieList = [{
      id: 23,
      title: 'Ace Drummond',
      image: 'https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1705/chutimakuanamon170500292/79121892-homer-simpson-thinking-illustration.jpg',
      description: 'This is Homer, well known for his doughnut devouring...'
    },
    {
      id: 5,
      title: 'MJ',
      image: 'https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1705/chutimakuanamon170500292/79121892-homer-simpson-thinking-illustration.jpg',
      description: 'Michael Jackson...'
    },
    {
      id: 20,
      title: 'Steve Jobs',
      image: 'https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1705/chutimakuanamon170500292/79121892-homer-simpson-thinking-illustration.jpg',
      description: 'Creator of apple...'
    }];

    for (let index in movieList) {
      let movie = movieList[index];
      console.log('Index', index)
      console.log('Movie', movie)
      if (movie.id === id) {
        $scope.movie = movie;
        break;
      }
    }

  });
