package ch.aaap.gr5;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

import ch.aaap.gr5.model.Grid;
import ch.aaap.gr5.model.Util;

public class GameOfLife {

    public static void main(String[] args) throws FileNotFoundException{
        // read file into stream, try-with-resources
    	Grid grid = Util.parseFromFile(args[0]);
    	System.out.println(grid);
    }
}
