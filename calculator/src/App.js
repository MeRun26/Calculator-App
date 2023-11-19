import React, { useState } from "react";
import styles from "./App.module.css";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const OPERATORS = ["+", "-", "*", "/", "C", "="];

const App = () => {
	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("");
	const [displayValue, setDisplayValue] = useState("");
	const [isResult, setIsResult] = useState(false);

	// Функция для обработки клика по цифровым кнопкам
	const handleNumberClick = (number) => {
		if (!operator) {
			// Если оператор не установлен, обновляем operand1
			setOperand1(`${operand1}${number}`);
			setDisplayValue(`${operand1}${number}`);
		} else {
			// Если оператор установлен, обновляем operand2
			setOperand2(`${operand2}${number}`);
			setDisplayValue(`${operand1} ${operator} ${operand2}${number}`);
		}
	};

	// Функция для обработки клика по кнопкам операций
	const handleOperatorClick = (op) => {
		if (op === "=") {
			// Выполнение операции при нажатии на "="
			if (operand1 && operand2 && operator) {
				let result = 0;
				switch (operator) {
					case "+":
						result = parseInt(operand1) + parseInt(operand2);
						break;
					case "-":
						result = parseInt(operand1) - parseInt(operand2);
						break;
					case "*":
						result = parseInt(operand1) * parseInt(operand2);
						break;
					case "/":
						result = parseInt(operand1) / parseInt(operand2);
						break;
					default:
						break;
				}
				setOperand1(result.toString());
				setOperand2("");
				setOperator("");
				setDisplayValue(result.toString());
				setIsResult(true);
			}
		} else if (op === "C") {
			// "C"-Сброс всех значений
			setOperand1("");
			setOperand2("");
			setOperator("");
			setDisplayValue("");
			setIsResult(false);
		} else {
			// Установка оператора
			if (operand1 && !operand2) {
				setOperator(op);
				setIsResult(false);
				setDisplayValue(`${operand1} ${op}`);
			} else if (operand1 && operand2 && operator) {
				// Если уже есть два операнда и предыдущий оператор,
				// выполняем операцию с предыдущим оператором
				handleOperatorClick("=");
				setOperator(op);
			}
		}
	};
	return (
		<div className={styles.calculator}>
			<div
				className={`${styles.display} ${isResult ? styles.result : ""}`}
			>
				{displayValue}
			</div>
			<div className={styles.grid}>
				<div>
					{NUMS.map((num) => (
						<button
							className={styles.numbers}
							key={num}
							onClick={() => handleNumberClick(num)}
						>
							{num}
						</button>
					))}
				</div>
				{/* Вывод кнопок */}
				<div>
					{OPERATORS.map((op) => (
						<button
							className={styles.operators}
							key={op}
							onClick={() => handleOperatorClick(op)}
						>
							{op}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
