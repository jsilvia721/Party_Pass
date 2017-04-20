import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './partyList.html';

import { parties } from '../../api/parties.js';

class PartyListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      parties() {
        return parties.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    })
  }

 addParty(newParty) {
   // Insert a party into the collection
     parties.insert({
     address: newParty.address,
     date: newParty.date,
     start: newParty.start,
     end: newParty.end,
     host: newParty.host,
     createdAt: new Date
   });

   // Clear form
   //this.newParty = '';
 }

 removeParty(party) {
     parties.remove(party._id);
   }

}

export default angular.module('partyList', [
  angularMeteor
])
  .component('partyList', {
    templateUrl: 'imports/components/partyList/partyList.html',
    controller: ['$scope', PartyListCtrl]
  });
