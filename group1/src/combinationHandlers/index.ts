import { HighestHandHandler } from "./HighestHandHandler";
import { OnePairHandler } from "./OnePairHandler";

export const chain = new OnePairHandler();

chain.setNext(new HighestHandHandler())
