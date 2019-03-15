package com.example.GameOfLife;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Cell {
    int i;
    int j;

    boolean isAlive;

}
