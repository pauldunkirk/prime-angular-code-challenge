HeroApp.controller('PowersListController', ['PowersFactory', function(PowersFactory){
    console.log('Powers List Controller loaded');

  var self = this;


  self.powersList = PowersFactory.allPowers;
  console.log(PowersFactory.allPowers);
  // console.log(PowersFactory);
  // console.log(self);
  console.log(self.Powerslist);


  self.editPowers = function() {
    PowersFactory.editPowers(self.editPowers);
  }

  self.deletePowers = function(powersId) {
    PowersFactory.deletePowers(powersId);
  }

  }]);
