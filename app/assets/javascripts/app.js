var app = angular.module('app', ['ui.router', 'restangular']);

app.constant('_', window._);
 // use in views, ng-repeat="x in _.range(3)"
app.run(function ($rootScope) {
    $rootScope._ = window._;
 });

app.config(
  ["$httpProvider", "$stateProvider", "$urlRouterProvider", "RestangularProvider",
    function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {
      // CSRF stuff
      var token = $('meta[name=csrf-token]').attr('content');
      $httpProvider
        .defaults
        .headers
        .common['X-CSRF-Token'] = token;

      // routing
      $urlRouterProvider.otherwise('');

      $stateProvider
        .state('messages', {
          url: '',
          templateUrl: '/templates/messages/index.html',
          controller: 'MessagesCtrl'
        });

      // Restangular
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
    }
  ]
);
