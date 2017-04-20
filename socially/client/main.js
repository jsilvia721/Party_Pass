import angular from 'angular';
import angularMeteor from 'angular-meteor';
import partyList from '../imports/components/partyList/partyList';

angular.module('test', [
  angularMeteor,
  partyList.name
]);
