package ch.aaap.dojo.texas;

import java.util.ArrayList;
import java.util.HashMap;
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

            if (currentMax < rank) {
                currentMax = rank;
                maxCard = card;
            }
        }

        return maxCard;
    }

    public List<List<String>> extractHighestCardSets(final List<List<String>> cardSets) {
        List<List<String>> results = new ArrayList<>();
        List<String> highestCards = new ArrayList<>();
        String highestRank;

        for (List<String> cardSet :
            cardSets) {
            final String highestCard = extractHighestCard(cardSet);

            highestCards.add(highestCard);
        }

        highestRank = extractHighestCard(highestCards);

        for (String card : highestCards) {
            if (card.charAt(0) == highestRank.charAt(0)) {
                for (List<String> list : cardSets) {
                    if (list.contains(card)) {
                        results.add(list);
                    }
                }
            }
        }

        return results;
    }

    public boolean hasPair(List<String> cardSet) {
        final Map<Character, Integer> rankOccurences = new HashMap<>();
        for (String card : cardSet) {
            char rank = card.charAt(0);

            Integer count = rankOccurences.getOrDefault(rank, 0);
            rankOccurences.put(rank, count + 1);
        }
        return rankOccurences.values().stream().anyMatch(v -> v >= 2);
    }
}
