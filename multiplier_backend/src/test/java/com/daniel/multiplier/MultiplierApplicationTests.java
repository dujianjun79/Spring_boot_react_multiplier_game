package com.daniel.multiplier;

import com.daniel.multiplier.model.Calculator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class MultiplierApplicationTests {

	@Autowired
	Calculator calculator;

	@Test
	void contextLoads() {
		assertEquals(10, calculator.multiplier(4,5));
	}

	@Test
	void testdivide() {
		assertEquals(2, calculator.divide(4,2));
	}






	}
