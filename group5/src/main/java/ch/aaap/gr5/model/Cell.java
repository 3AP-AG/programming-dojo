package ch.aaap.gr5.model;

public class Cell {

	private boolean isAlive;
	private Cell[] neighbours;

	public boolean isAlive() {
		return isAlive;
	}

	public void setAlive(boolean isAlive) {
		this.isAlive = isAlive;
	}

	public Cell[] getNeighbours() {
		return neighbours;
	}

	public void setNeighbours(Cell[] neighbours) {
		this.neighbours = neighbours;
	}
}
