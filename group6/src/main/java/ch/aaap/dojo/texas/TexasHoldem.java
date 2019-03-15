package ch.aaap.dojo.texas;

import java.util.List;
import java.util.Map;

import static java.util.Map.entry;

public class TexasHoldem {

    private static final Map<Character, Integer> CARD_RANK = Map.ofEntries(
        entry('2', 2),
        entry('3', 3),
        entry('4', 4),
        entry('5', 5),
        entry('6', 6),
        entry('7', 7),
        entry('8', 8),
        entry('9', 9),
        entry('T', 10),
        entry('J', 11),
        entry('Q', 12),
        entry('K', 13),
        entry('A', 14)
    );

    public String extractHighestCard(List<String> cards) {
        String maxCard = "";
        int currentMax = 0;

        for (final String card :
            cards) {
            char rankOfCard = card.charAt(0);
            Integer rank = CARD_RANK.get(rankOfCard);

            if(currentMax < rank) {
                currentMax = rank;
                maxCard = card;
            }
        }

        return maxCard;
    }
}
