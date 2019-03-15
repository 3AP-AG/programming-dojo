import { Hand } from './Hand';

export class Game {
    constructor(private hands: Hand[]) {}

    public static getGameFromString(gameString: string): Game {
        const hands = gameString.split('\n').map(Hand.getHandFromLine);

        return new Game(hands);
    }

    public toString(): string {
        return this.hands.join('\n');
    }
}
