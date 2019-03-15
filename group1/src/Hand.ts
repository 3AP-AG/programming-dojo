import { Card } from './Card';

export class Hand {
    public constructor(private cards: Card[]) {}

    public static getHandFromLine(handLine: string): Hand {
        const cards = handLine.split(' ').map(Card.cardFromString);
        return new Hand(cards);
    }

    public toString(): string {
        return this.cards.join(' ');
    }
}
