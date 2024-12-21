import styles from './App.module.css';
import React, { useState } from 'react';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function App() {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');

	const clickReset = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};
	const getTheTotalValue = () => {
		if (operator === '-') {
			const numberDifference = Math.abs(operand1 - operand2);

			return numberDifference;
		} else if (operator === '+') {
			const numberSum = Math.abs(Number(operand1) + Number(operand2));

			return numberSum;
		}
	};
	const resultNumber = () => {
		setOperand2('');
		setOperator('=');
		setOperand1(getTheTotalValue());
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={operator === '=' ? styles.colorText : styles.display}>
						{operator === '=' ? operand1 : operand1 + operator + operand2}
					</div>
				</div>
				<div className={styles['container-number-button']}>
					{NUMS.map((number) => (
						<button
							className={styles['number-button']}
							key={number}
							onClick={() => {
								operator === '+' || operator === '-'
									? setOperand2(operand2 + number)
									: setOperand1(operand1 + number);
							}}
						>
							{number}
						</button>
					))}
				</div>
				<div className={styles['buttons-operations']}>
					<button
						className={styles['operations']}
						onClick={() => {
							setOperator('+');
						}}
					>
						+
					</button>
					<button
						className={styles['operations']}
						onClick={() => {
							setOperator('-');
						}}
					>
						-
					</button>
					<button className={styles['operations']} onClick={() => resultNumber()}>
						=
					</button>
					<button className={styles['operations']} onClick={() => clickReset()}>
						C
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
