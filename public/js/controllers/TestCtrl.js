angular.module('TestCtrl', []).controller('TestController', function($scope, $http) {

	$http.get('views/angulartest/todo.json').success(function(data)
	{	
		console.log("come");
		console.log(data);
		console.log("come end");
		$scope.todos = data;
	});

	$scope.addTodo = function()
	{
		if ($scope.newTodo)
		{
			$scope.todos.push(
			{
				"checked" : "",
				"work" : $scope.newTodo
			});

			$scope.newTodo = null;
		} 
		else
		{
			alert('할일을 입력해주세요!');
		}
	};
});