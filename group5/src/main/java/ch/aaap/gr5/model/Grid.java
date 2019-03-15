package ch.aaap.gr5.model;

import java.util.Arrays;

public class Grid {

	private int rowSize;
	private int columnSize;
	private String[][] grid;

	public Grid(int rowSize, int columnSize, String[][] grid) {
		this.rowSize = rowSize;
		this.columnSize = columnSize;
		this.grid = grid;
	}
	
	public int getRowSize() {
		return rowSize;
	}

	public void setRowSize(int rowSize) {
		this.rowSize = rowSize;
	}

	public int getColumnSize() {
		return columnSize;
	}

	public void setColumnSize(int columnSize) {
		this.columnSize = columnSize;
	}

	public String[][] getGrid() {
		return grid;
	}

	public void setGrid(String[][] grid) {
		this.grid = grid;
	}

	@Override
	public String toString() {
		return "Grid [rowSize=" + rowSize + ", columnSize=" + columnSize + ", grid=" + Arrays.deepToString(grid) + "]";
	}

}