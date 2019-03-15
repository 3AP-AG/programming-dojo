import { Hand } from './Hand';
import { Game } from './Game';

const gameString = `Kc 9s Ks Kd 9d 3c 6d
9c Ah Ks Kd 9d 3c 6d
Ac Qc Ks Kd 9d 3c
9h 5s
4d 2d Ks Kd 9d 3c 6d
7s Ts Ks Kd 9d`;

// const hand = Hand.getHandFromLine('Kc 9s Ks Kd 9d 3c 6d');
// console.log(hand, hand.toString());

const game = Game.getGameFromString(gameString);
console.log(game.toString());
