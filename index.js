function Boardmember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

Boardmember.prototype.veto = function() {
  return 'No, I must disagree'
}