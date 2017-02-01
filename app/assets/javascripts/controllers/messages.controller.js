app.controller('MessagesCtrl',
  ['$scope', 'Restangular',
  function($scope, Restangular) {
    $scope.messages = Restangular.all('messages').getList().$object;
  }
]);
