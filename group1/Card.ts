import { CardSuit } from './CardSuit';
import { CardValue } from './CardValue';

export class Card {
    public constructor(private value: CardValue, private suit: CardSuit) {}
}
