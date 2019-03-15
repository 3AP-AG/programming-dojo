package com.example.GameOfLife;

public class Matrix {
    private final Cell[][] cells;
    int length;
    int width;

    Matrix(final int length, final int width) {
        this.length = length;
        this.width = width;

        this.cells = new Cell[length][width];
    }

    
}
