HeroApp.controller('HeroListController', ['HeroFactory', function(HeroFactory){
    console.log('Hero List Controller loaded');

  var self = this;




  self.heroList = HeroFactory.allHeroes;
  console.log(HeroFactory.allHeroes);
  // console.log(HeroFactory);
  // console.log(self);
  console.log(self.herolist);


  self.editHero = function() {
    HeroFactory.editHero(self.newHero);
  }

  self.deleteHero = function(heroId) {
    HeroFactory.deleteHero(heroId);
  }

  }]);
