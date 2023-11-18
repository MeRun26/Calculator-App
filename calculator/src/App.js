import React, { useState } from "react";
import styles from "./App.module.css";

const buttons = [
	"1",
	"2",
	"3",
	"-",
	"4",
	"5",
	"6",
	"+",
	"7",
	"8",
	"9",
	"/",
	"C",
	"0",
	"=",
	"*",
];

const Calculator = () => {
	// const [operand1, setOperand1] = useState("");
	// const [operator, setOperator] = useState("");
	// const [operand2, setOperand2] = useState("");
	const [displayValue, setDisplayValue] = useState("");
	// const [isResult, setIsResult] = useState(false);
	const [resultColor, setResultColor] = useState(styles.defaultColor);

	// // asfsfsdfgdgdf
	// const handleNumberClick = (num) => {
	// 	if (isResult) {
	// 		setOperand1(num);
	// 		setIsResult(false);
	// 	} else if (!operator) {
	// 		setOperand1(operand1 + num);
	// 	} else {
	// 		setOperand2(operand2 + num);
	// 	}
	// };

	// const handleOperatorClick = (op) => {
	// 	if (op === "C") {
	// 		setOperand1("");
	// 		setOperand2("");
	// 		setOperator("");
	// 		setIsResult(false);
	// 	} else if (op === "=") {
	// 		if (operand2 && operator) {
	// 			let result;
	// 			switch (operator) {
	// 				case "+":
	// 					result = parseInt(operand1) + parseInt(operand2);
	// 					break;
	// 				case "-":
	// 					result = parseInt(operand1) - parseInt(operand2);
	// 					break;
	// 				// Add cases for other operators if needed
	// 				default:
	// 					break;
	// 			}
	// 			setOperand1(result.toString());
	// 			setOperator("");
	// 			setOperand2("");
	// 			setIsResult(true);
	// 		}
	// 	} else {
	// 		setOperator(op);
	// 		setIsResult(false);
	// 	}
	// };

	// // asfsfsdfgdgdf

	const handleButtonClick = (value) => {
		if (value === "=") {
			try {
				const result = eval(displayValue);
				setDisplayValue(result.toString());
				setResultColor(styles.resultColor);
			} catch (error) {
				setDisplayValue("Неккоректное выражение!!!");
			}
		} else if (value === "C") {
			setDisplayValue("");
			setResultColor(styles.defaultColor);
		} else {
			setDisplayValue(displayValue + value);
			setResultColor(styles.defaultColor);
		}
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.display + " " + resultColor}>
				{displayValue}
			</div>
			<table className={styles.table}>
				{[0, 1, 2, 3].map((row) => (
					<tr key={row}>
						{[0, 1, 2, 3].map((col) => {
							const index = row * 4 + col;
							return (
								<td key={col}>
									<button
										onClick={() =>
											handleButtonClick(buttons[index])
										}
										className={styles.button}
									>
										{buttons[index]}
									</button>
								</td>
							);
						})}
					</tr>
				))}
			</table>
		</div>
	);
};

export default Calculator;
