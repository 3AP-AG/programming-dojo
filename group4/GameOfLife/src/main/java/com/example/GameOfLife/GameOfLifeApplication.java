package com.example.GameOfLife;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

import static org.apache.commons.lang3.StringUtils.*;

@SpringBootApplication
public class GameOfLifeApplication {

    public static void main(String[] args) {
        SpringApplication.run(GameOfLifeApplication.class, args);
    }

    public static Matrix createMatrix(String input) {


        final int width = extractWidth(input);
        final int length = extractLength(input);
        final Matrix matrix = new Matrix(length, width);

        for (int i = 0; i < length; i++) {
            for(int j = 0; j < width; j++) {

                boolean cellAlive = isCellAlive(input.charAt(i * width + j));

                List<Cell> cells = neighbors;
                matrix.addCell(i, j, cellAlive, cells);
            }

        }


        return matrix;
    }

    static int extractLength(final String input) {

        return countMatches(input, '\n');
    }

    static int extractWidth(final String input) {

        return input.indexOf('\n');

    }

    static boolean isCellAlive(char cell) {
        return cell == '*';
    }

    List<Cell> addNeighbours(Matrix matrix, Cell cell){
        ArrayList<Cell> neighbours = new ArrayList<>();
        neighbours.add(matrix.getCellFromPosition(cell.i-1, cell.j-1);
        neighbours.add(matrix.getCellFromPosition(cell.i,cell.j-1);
        neighbours.add(matrix.getCellFromPosition(cell.i+1,cell.j+1);
        neighbours.add(matrix.getCellFromPosition(cell.i-1,cell.j);
        neighbours.add(matrix.getCellFromPosition(cell.i+1,cell.j);
        neighbours.add(matrix.getCellFromPosition(cell.i+1,cell.j+1);
        neighbours.add(matrix.getCellFromPosition(cell.i+1, cell.j);
        neighbours.add(matrix.getCellFromPosition(cell.i,cell.j+1);
        neighbours.add(matrix.getCellFromPosition(cell.i+1,cell.j+1);
    }


}
