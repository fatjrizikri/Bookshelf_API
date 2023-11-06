/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */


// TODO 3
const Tiger = require('./Tiger.js');
const Wolf = require('./Wolf.js');

const fight = (tiger, wolf) => {
  if (tiger.strength = wolf.strength) {
    return 'Harimau dan serigala sama-sama kuat!';
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }else{
    return tiger.growl();
  }
};

const myTiger = new Tiger('120');
const myWolf = new Wolf('120');

const result = fight(myTiger, myWolf);


// TODO 4
module.exports = {
  fight,
  myTiger,
  myWolf,
  result
};
console.log('result:', result);