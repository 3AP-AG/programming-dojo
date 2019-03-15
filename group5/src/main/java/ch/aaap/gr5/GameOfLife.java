package ch.aaap.gr5;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class GameOfLife {

    public static void main(String[] args){
        //read file into stream, try-with-resources
        try (Stream<String> stream = Files.lines(Paths.get(args[0]))) {

            stream.forEach(System.out::println);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
