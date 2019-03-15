const enum CardSuitEnum {
    HEARTS = 'HEARTS',
    DIAMONDS = 'DIAMONDS',
    SPADES = 'SPADES',
    CLUBS = 'CLUBS'
}

export class CardSuit {
    constructor(private cardSuitEnum: CardSuitEnum) {}

    public static suitFromCharacter(character: string): CardSuit {
        const characterSuitType: any = 
        { h: CardSuitEnum.HEARTS, d: CardSuitEnum.DIAMONDS, s: CardSuitEnum.SPADES, c: CardSuitEnum.CLUBS };
        return new CardSuit(characterSuitType[character]);
    }
}
