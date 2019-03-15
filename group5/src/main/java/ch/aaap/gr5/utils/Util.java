package ch.aaap.gr5.utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

import ch.aaap.gr5.model.Cell;
import ch.aaap.gr5.model.Grid;

public class Util {

	public static Grid parseFromFile(String filePath) throws FileNotFoundException {
		
		Scanner sc = new Scanner(new BufferedReader(new FileReader(filePath)));
		String [] gridSize = sc.nextLine().split(" ");
	      int rows = Integer.valueOf(gridSize[0]);
	      int columns = Integer.valueOf(gridSize[1]);
	      Cell[][] cells = new Cell[rows][columns];

	      while(sc.hasNextLine()) {
	         for (int i=0; i<cells.length; i++) {
	            String[] line = sc.nextLine().trim().split("");
	            for (int j=0; j<line.length; j++) {
	            	Boolean isAlive = line[j].equals("*") ? true : false;
	            	Cell cell = new Cell();
	            	cell.setAlive(isAlive);
	            	cells[i][j] = cell;
	            }
	         }
	      }
	      
//	      get cell neigbours
	      for(int k=0; k<cells.length; k++) {
	    	  for (int j=0; j<cells[k].length; j++) {
	    		  Cell[] cellNeighbours = new Cell[8];
	    		  Cell activeCell = cells[k][j];
	              
	          }
	      }
	      
		return new Grid(rows, columns, cells);
	}

}

