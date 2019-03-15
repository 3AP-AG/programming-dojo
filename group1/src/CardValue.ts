import {CardSuit} from "./CardSuit";

export const enum CardValueEnum {
    ONE = 'ONE',
    TWO = 'TWO',
    THREE = 'THREE',
    FOUR = 'FOUR',
    FIVE = 'FIVE',
    SIX = 'SIX',
    SEVEN = 'SEVEN',
    EIGHT = 'EIGHT',
    NINE = 'NINE',
    TEN = 'TEN',
    JACK = 'JACK',
    QUEEN = 'QUEEN',
    KING = 'KING',
    ACE = 'ACE'
}

export class CardValue {
    constructor(private cardValueEnum: CardValueEnum) {}

    public static cardValueFromCharacter(character: string): CardValue {
        const characterValueType: any = {
            '1': CardValueEnum.ONE,
            '2': CardValueEnum.TWO,
            '3': CardValueEnum.THREE,
            '4': CardValueEnum.FOUR,
            '5': CardValueEnum.FIVE,
            '6': CardValueEnum.SIX,
            '7': CardValueEnum.SEVEN,
            '8': CardValueEnum.EIGHT,
            '9': CardValueEnum.NINE,
            'T': CardValueEnum.TEN,
            'J': CardValueEnum.JACK,
            'Q': CardValueEnum.QUEEN,
            'K': CardValueEnum.KING,
            'A': CardValueEnum.ACE
        };

        return new CardValue(characterValueType[character]);
    }

    public toString():string{
        return '';
    }

}
