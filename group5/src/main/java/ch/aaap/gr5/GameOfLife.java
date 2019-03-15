package ch.aaap.gr5;

import java.io.FileNotFoundException;

import ch.aaap.gr5.model.Grid;
import ch.aaap.gr5.utils.Util;

public class GameOfLife {

    public static void main(String[] args) throws FileNotFoundException {
        // read file into stream, try-with-resources
    	Grid grid = Util.parseFromFile(args[0]);
    	int generationNo = Integer.parseInt(args[1]);
    	
    	for (int i = 0; i < generationNo; i++) {
    		Grid tempGrid = util.calcGeneration(grid);
    		print(tempGrid)
    		grid = tempGrid;
    	}
    	grid.getGrid()
    }
}
