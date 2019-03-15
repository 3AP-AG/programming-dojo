package com.example.GameOfLife;

import lombok.Data;

@Data
public class Matrix {
    private final Cell[][] cells;
    int length;
    int width;

    Matrix(final int length, final int width) {
        this.length = length;
        this.width = width;

        this.cells = new Cell[length][width];
    }

    public void addCell(int length, int width, boolean isAlive) {
        cells[length][width] = Cell.builder()
                          .i(length)
                          .j(width)
                          .isAlive(isAlive)
                          .build();
    }

    public Cell getCellFromPosition(int length, int width) {
        return cells[length][width];
    }

    
}
