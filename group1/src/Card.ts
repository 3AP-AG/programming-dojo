import { CardSuit } from './CardSuit';
import { CardValue } from './CardValue';

export class Card {
    public constructor(private value: CardValue, private suit: CardSuit) {}

    public static cardFromString(cardString: string): Card {
        const rawSuit = cardString[1];
        const rawValue = cardString[0];
        const suit = CardSuit.suitFromCharacter(rawSuit);
        const value = CardValue.cardValueFromCharacter(rawValue);
        return new Card(value, suit);
    }

    public toString(): string {
        return `${this.value}${this.suit}`;
    }
}
