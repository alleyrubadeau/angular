var app = angular.module("firstApp", ['ngSanitize']);


app.controller('MyFirstController', function($scope) {
	$scope.name='Alley Rubadeau'
})

app.controller("ExercisesController", function($scope, $sce) {
	$scope.FavColor='purple';
	$scope.SecondsInACentury='';
	$scope.rightNow=Date.now()
	$scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
	$scope.symbol = ["&spades;", "&clubs;", "&hearts;", "&diams;"]

})
app.controller('cameraController', function($scope) {
	$scope.cameras =
	[
        {
            title: "Nikon D3100 DSLR",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            rating: 3.4,
            price: 369.99,
            onSale: true
        },
        {
            title: "Canon EOS 70D",
            image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
            rating: 2.0,
            price: 1099.0,
            onSale: false
        },
        {
            title: "Nikon D810A",
            image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }
    ]
})


app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [],
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});
