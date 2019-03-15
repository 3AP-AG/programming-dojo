package ch.aaap.dojo.texas

import spock.lang.Specification

class TexasHoldemTest extends Specification {

    void "return highest card"() {

        given:
        List<String> cards = ["Kc", "9s", "Ks", "Kd", "9d", "3c", "6d"]
        String exptectedResult = "Kc"
        TexasHoldem texasHoldem = new TexasHoldem()

        when:
        String result = texasHoldem.extractHighestCard(cards)

        then:
        exptectedResult == result

    }
}
