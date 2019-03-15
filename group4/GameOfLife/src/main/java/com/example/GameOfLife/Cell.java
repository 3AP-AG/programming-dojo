package com.example.GameOfLife;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class Cell {
    int i;
    int j;

    boolean isAlive;
    List<Cell> neihbours = new ArrayList<>();

    public void addNeighbour(Cell neighbor) {
        neihbours.add(neighbor);
    }
}
