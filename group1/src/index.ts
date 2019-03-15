import { Card } from "./Card";
import { CardSuit } from "./CardSuit";
import { CardValue } from "./CardValue";

function parseLine(line: string) {
    return line.split(' ');
}

function cardFromString(cardString: string): Card{
    const rawSuit = cardString[1];
    const rawValue = cardString[0];

    const suit = suitFromCharacter(rawSuit);
    const value = valueFromCharacter(rawValue);
    return new Card(value, suit);
}

function suitFromCharacter(rawSuit: string): CardSuit{
    const characterSuitType: any = 
    { h: CardSuit.HEARTS, d: CardSuit.DIAMONDS, s: CardSuit.SPADES, c: CardSuit.CLUBS };
    return characterSuitType[rawSuit];
}

function valueFromCharacter(rawValue: string): CardValue {
    const characterValueType: any = {
        '1': CardValue.ONE,
        '2': CardValue.TWO,
        '3': CardValue.THREE,
        '4': CardValue.FOUR,
        '5': CardValue.FIVE,
        '6': CardValue.SIX,
        '7': CardValue.SEVEN,
        '8': CardValue.EIGHT,
        '9': CardValue.NINE,
        'T': CardValue.TEN,
        'J': CardValue.JACK,
        'Q': CardValue.QUEEN,
        'K': CardValue.KING,
        'A': CardValue.ACE
    }
    return characterValueType[rawValue];
}


const t = cardFromString('Kc');
console.log(t);