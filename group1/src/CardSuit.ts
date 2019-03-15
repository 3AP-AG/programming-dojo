import { swapKeyValue } from "./utils";

const enum CardSuitEnum {
    HEARTS = 'HEARTS',
    DIAMONDS = 'DIAMONDS',
    SPADES = 'SPADES',
    CLUBS = 'CLUBS'
}

const characterSuitType: any = 
        { h: CardSuitEnum.HEARTS, 
            d: CardSuitEnum.DIAMONDS, 
            s: CardSuitEnum.SPADES, c: CardSuitEnum.CLUBS };

const suitCharacterType = swapKeyValue(characterSuitType);

export class CardSuit {
    constructor(private cardSuitEnum: CardSuitEnum) {}

    public static suitFromCharacter(character: string): CardSuit {
        
        return new CardSuit(characterSuitType[character]);
    }

    public toString():string{
        return suitCharacterType[this.cardSuitEnum];
    }
}
