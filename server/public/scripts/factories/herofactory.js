HeroApp.factory('HeroFactory', ['$http', function($http) {

  var allHeroes = { list: [] };

  getHeroes();

  function getHeroes() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      allHeroes.list = response.data;
    });
  }

  function deleteHero(heroId){
    $http({
      method: 'DELETE',
      url: '/heroes/' + heroId
    }).then(function(response) {
      getHeroes();
    });
  }


  return {
    allHeroes: allHeroes,
    // updateheros: getHeroes,
    // addhero: addhero,
    deleteHero: deleteHero
  };
}]);

// function addhero(someNewhero) {
//   $http({
//     method: 'POST',
//     url: '/heros',
//     data: someNewhero
//   }).then(function(response){
//     console.log(response);
//     getheros();
//   });
// }
