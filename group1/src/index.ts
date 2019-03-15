import { Card } from "./Card";
import { CardSuit } from "./CardSuit";
import { CardValue } from "./CardValue";

function parseLine(line: string) {
    return line.split(' ');
}

function cardFromString(cardString: string): Card{
    const rawSuit = cardString[1];
    const rawValue = cardString[0];

    const suit = CardSuit.suitFromCharacter(rawSuit);
    const value = CardValue.cardValueFromCharacter(rawValue);
    return new Card(value, suit);
}

const t = cardFromString('Kc');
console.log(t);
