package ch.aaap.gr5.model;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class Util {

	public static Grid parseFromFile(String filePath) throws FileNotFoundException {
		
		Scanner sc = new Scanner(new BufferedReader(new FileReader(filePath)));
		String [] gridSize = sc.nextLine().split(" ");
	      int rows = Integer.valueOf(gridSize[0]);
	      int columns = Integer.valueOf(gridSize[1]);
	      String [][] myArray = new String[rows][columns];

	      while(sc.hasNextLine()) {
	         for (int i=0; i<myArray.length; i++) {
	            String[] line = sc.nextLine().trim().split("");
	            for (int j=0; j<line.length; j++) {
	               myArray[i][j] = line[j];
	            }
	         }
	      }
		return new Grid(rows, columns, myArray);
	}
}

