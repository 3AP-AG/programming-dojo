import { CardCombination, CardCombinationEnum } from "../CardCombination";
import { AbstractHandler } from "./AbstractHandler";
import { Hand } from '../Hand';

export class OnePairHandler extends AbstractHandler {
    public handle(hand: Hand): CardCombination {
        // if (hand has one pair)
        return new CardCombination(CardCombinationEnum.PAIR);
        // else 
        return super.handle(hand);

    }
}
