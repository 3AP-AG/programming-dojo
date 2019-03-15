package com.example.GameOfLife;

import lombok.Data;

import java.util.List;

@Data
public class Matrix {
    private final Cell[][] cells;
    int length;
    int width;

    Matrix(final int length, final int width) {
        this.length = length;
        this.width = width;

        this.cells = new Cell[length][width];

        for (int i = 0; i < length; i++) {
            for (int j = 0; j < width; j++) {
                cells[length][width] = Cell.builder().build();
            }
        }
    }

    public void addCell(int length, int width, boolean isAlive, List<Cell> neighbors) {
        Cell currentCell = cells[length][width];

        currentCell.setAlive(isAlive);
        currentCell.setI(length);
        currentCell.setJ(width);
        currentCell.setNeihbours(neighbors);
    }

    public Cell getCellFromPosition(int length, int width) {
        return cells[length][width];
    }

    
}
