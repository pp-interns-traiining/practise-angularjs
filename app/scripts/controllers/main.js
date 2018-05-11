'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope, $location) {
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
    $scope.movies = movieList;

    $scope.movie = {
      title: '',
      image: '',
      category: '',
      description: ''
    };

    // $scope.newMovieImage = '';
    // $scope.newMovieTitle = '';
    // $scope.newMovieCategory = '';
    // $scope.newMovieDescription = '';

    $scope.validateTitle = function() {
        if ($scope.movie.title.length > 0) {
          console.debug('legit');
        } else {
          window.alert('title required');
        }
    };

    // $scope.addMovie = function() {
    //   let movie = {
    //     title: $scope.newMovieTitle,
    //     category: $scope.newMovieCategory,
    //     image: $scope.newMovieImage,
    //     description: $scope.newMovieDescription
    //   }
    //
    //   $scope.movies.push(movie);
    // };

    //Use angular.copy to avoid two-way binding problem..?

    $scope.addMovie = function() {
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function() {
      if($scope.movie.category === '') {
        alert('Cannot be empty');
      }
    };

    //Hide preview for image unless condition is met..

    $scope.preview = function() {
      if ($scope.movie.image.length > 7 && $scope.movie.image.substr(-3) == 'png') {
        return true;
      } else {
        return false;
      }
    }

    //Toggle to display or hide add movie form..

    $scope.closed = false;

    //Hide add button unless required fields are filled..

    $scope.isValid = function() {
      if ($scope.movie.title == '') {
        return false;
      }
      if ($scope.movie.image == '') {
        return false;
      }
      if ($scope.movie.category == '') {
        return false;
      }
      if ($scope.movie.description == '') {
        return false;
      }
      return true;
    }

    $scope.goToRandomMovie = function() {
      let index = Math.floor(Math.random() * $scope.movies.length);
      let movie = $scope.movies[index];
      let url = 'movie/'+movie.id+'/'+movie.title;
      $location.url(url);
    };

  });
