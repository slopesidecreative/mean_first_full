/* configuration for angular route */
app.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    })
    .when('/friends/:id/edit/', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'eC'
    })
    .when('/friends/:id', {
      templateUrl: '/partials/show.html',
      controller: 'showController',
      controllerAs: 'sC'
    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
      controllerAs: 'nC'
    })
    .otherwise({
      redirectTo: '/index'
    });
});
