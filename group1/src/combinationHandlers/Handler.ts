import { Hand } from "../Hand";
import { CardCombination } from "../CardCombination";

export interface Handler {
    setNext(handler: Handler): Handler;

    handle(hand: Hand): CardCombination;
}
