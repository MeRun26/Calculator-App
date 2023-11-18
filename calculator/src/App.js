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
	const [displayValue, setDisplayValue] = useState("");

	const [resultColor, setResultColor] = useState(styles.defaultColor);

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
