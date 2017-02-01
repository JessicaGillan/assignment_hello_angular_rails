var app = angular.module('app', ['ui.router', 'restangular']);

app.constant('_', window._);
 // use in views, ng-repeat="x in _.range(3)"
app.run(function ($rootScope) {
    $rootScope._ = window._;
 });

app.config(
  ["$httpProvider", "$stateProvider", "$urlRouterProvider",
    function($httpProvider, $stateProvider, $urlRouterProvider) {
      var token = $('meta[name=csrf-token]').attr('content');
      $httpProvider
        .defaults
        .headers
        .common['X-CSRF-Token'] = token;

      $urlRouterProvider.otherwise('');

      $stateProvider
        .state('messages', {
          url: '',
          templateUrl: '/templates/messages/index.html',
          controller: 'MessagesCtrl'
        });
    }
  ]
);
