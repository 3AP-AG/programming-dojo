import { CardSuit } from './CardSuit';
import { swapKeyValue } from './utils';

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
    T: CardValueEnum.TEN,
    J: CardValueEnum.JACK,
    Q: CardValueEnum.QUEEN,
    K: CardValueEnum.KING,
    A: CardValueEnum.ACE
};

const valueCharacterType: any = swapKeyValue(characterValueType);

export class CardValue {
    constructor(private cardValueEnum: CardValueEnum) {}

    public static cardValueFromCharacter(character: string): CardValue {
        return new CardValue(characterValueType[character]);
    }

    public toString(): string {
        return valueCharacterType[this.cardValueEnum];
    }
}
