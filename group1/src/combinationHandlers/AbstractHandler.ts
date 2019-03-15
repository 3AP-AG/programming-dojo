import {Handler} from './Handler';
import { Hand} from '../Hand';
import { CardCombination, CardCombinationEnum } from '../CardCombination';

export abstract class AbstractHandler implements Handler
{
    private nextHandler?: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public handle(hand: Hand): CardCombination {
        if (this.nextHandler) {
            return this.nextHandler.handle(hand);
        }

        return new CardCombination(CardCombinationEnum.HIGH_CARD);
    }
}