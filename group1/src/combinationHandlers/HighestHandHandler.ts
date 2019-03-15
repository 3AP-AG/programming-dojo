import { CardCombination, CardCombinationEnum } from "../CardCombination";
import { Hand } from '../Hand';
import { AbstractHandler } from "./AbstractHandler";

export class HighestHandHandler extends AbstractHandler {
    public handle(hand: Hand): CardCombination {

        return new CardCombination(CardCombinationEnum.HIGH_CARD);

    }
}
