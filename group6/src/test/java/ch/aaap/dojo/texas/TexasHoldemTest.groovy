package ch.aaap.dojo.texas

import spock.lang.Specification
import spock.lang.Unroll

class TexasHoldemTest extends Specification {

    TexasHoldem texasHoldem = new TexasHoldem()

    void "return highest card"() {

        given:
        List<String> cards = ["Kc", "9s", "Ks", "Kd", "9d", "3c", "6d"]
        String exptectedResult = "Kc"

        when:
        String result = texasHoldem.extractHighestCard(cards)

        then:
        exptectedResult == result

    }

    void "return highest card sets"() {
        given:
        List<List<String>> cardSets =
            [["Kc", "9s", "Ks", "Kd", "9d", "3c", "6d"],
             ["9c", "Ah", "Ks", "Kd", "9d", "3c", "6d"],
             ["Ac", "Qc", "Ks", "Kd", "9d", "3c"]]
        List<List<String>> expectedResult = [["9c", "Ah", "Ks", "Kd", "9d", "3c", "6d"],
                                             ["Ac", "Qc", "Ks", "Kd", "9d", "3c"]]

        when:
        List<List<String>> result = texasHoldem.extractHighestCardSets(cardSets)
        then:
        expectedResult == result
    }

    @Unroll
    void "return is pair #expectPair for set #cardSets"() {

        when:
        boolean isPair = texasHoldem.hasPair(cardSets)

        then:
        expectPair == isPair

        where:
        cardSets                                   | expectPair
        ["Kc", "9s", "Ks", "Kd", "9d", "3c", "6d"] | true
        ["Kd", "9d", "3c", "6d"]                   | false
    }

}
