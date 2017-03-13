HeroApp.factory('HeroFactory', ['$http', function($http) {

  var allHeroes = { list: [] };
  var allPowers = { list: [] };
  getHeroes();
  getPowers();


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


  function getPowers() {
    $http({
      method: 'GET',
      url: '/powers'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      allPowers.list = response.data;
    });
  }

  function deletePowers(heroId){
    $http({
      method: 'DELETE',
      url: '/heroes/' + heroId
    }).then(function(response) {
      getPowers();
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
    allPowers: allPowers,
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
