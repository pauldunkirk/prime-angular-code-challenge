HeroApp.controller('PowersListController', ['HeroFactory', function(HeroFactory){
    console.log('Powers List Controller loaded');

  var self = this;


  self.powersList = HeroFactory.allPowers;
  console.log(HeroFactory.allPowers);
  // console.log(PowersFactory);
  // console.log(self);
  console.log(self.Powerslist);


  self.editPowers = function() {
    HeroFactory.editPowers(self.editPowers);
  }

  self.deletePowers = function(powersId) {
    HeroFactory.deletePowers(powersId);
  }

  }]);
