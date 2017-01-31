'use strict';
angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('/messages');
      },
      addMessage: function ( message, name ) {
        return $http.post('/messages', { message: message, name: name });
      }
    };
  });
