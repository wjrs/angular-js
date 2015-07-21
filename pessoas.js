angular
   .module('pessoas', ['ngRoute'])

   .config(function($routeProvider){
      $routeProvider
         .when('/', {
            templateUrl: 'listar.html'
         })
         .when('/pessoa/adicionar', {
            templateUrl: 'adicionar.html',
            controller:  'AdicionarController'
         })
         .when('/pessoa/:index', {
            templateUrl: 'editar.html',
            controller: 'EditarController'
         })
   })

   .controller('PessoasController', function($scope){
      $scope.pessoas = [
         {nome: "Maria", cidade: "São Paulo"},
         {nome: "João",  cidade: "Rio"},
         {nome: "Pedro", cidade: "Salvador"},
         {nome: "José",  cidade: "Curitiba"}
      ];
   })

   .controller('AdicionarController', function($scope){
      $scope.add = function(){

        $scope.pessoas.push($scope.pessoa);

        $scope.pessoa = "";
        $scope.result = "Registro adicionado com sucesso!";
      };
   })

   .controller('EditarController', function($scope, $routeParams){
      $scope.pessoa = $scope.pessoas[$routeParams.index];
   });