'use strict';

/**
 * @ngdoc function
 * @name openshiftConsole.controller:CreateTemplateController
 * @description
 * # CreateTemplateController
 * Controller of the openshiftConsole
 */
angular.module('openshiftConsole')
  .controller('CreateTemplateController', function ($routeParams, $scope, ProjectsService) {
    $scope.projectName = $routeParams.project;

    // Set to true when everything has finished loading.
    $scope.loaded = false;

    function updateState() {
      // Have we finished loading everything?.
      $scope.loaded = true;
    }

    ProjectsService
      .get($routeParams.project)
      .then(_.spread(function(project) {
        $scope.project = project;
        updateState();
      }));
  });
