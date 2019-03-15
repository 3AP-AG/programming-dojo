package com.example.GameOfLife;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static com.example.GameOfLife.GameOfLifeApplication.*;
import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GameOfLifeApplicationTests {

	@Test
	public void parsedSuccessfully() {
		String input = "........\n"
				+ "....*...\n"
				+ "...**...\n"
				+ "........\n";
		
		//Matrix matrix = createMatrix(input);
		
		//assertEquals(matrix.length,8);
	}

	@Test
	public void should_return_correct_number_of_rows_and_columns() {
	    // given
		final String input = "........\n"
				+ "....*...\n"
				+ "...**...\n"
				+ "........\n";

	    // when
		final int length = extractLength(input);
		final int width = extractWidth(input);

		// then
		assertThat(length).isEqualTo(4);
		assertThat(width).isEqualTo(8);
	}

}
