import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Guessme.module.css";

export default function Guessme() {
	const questionList1 = [
		{
			url: "/guessme/q1.png",
			question: "Mẫu người yêu thích của bạn là gì?",
		},
		{
			url: "/guessme/q2.png",
			question: "Có điểm nào bạn muốn tui thay đổi?",
		},
		{
			url: "/guessme/q3.png",
			question: "Bạn thích lập kế hoạch hay thích tùy hứng?",
		},
	];

	const [count, setCount] = useState(0);
	const [img, setImg] = useState(questionList1[0].url);
	const [letters, setLetters] = useState([
		...questionList1[0].question.split(""),
	]);
	const [showLetter, setShowLetter] = useState(
		new Array(letters.length).fill(0)
	);

	const handleShowLetter = (index) => {
		let temp = showLetter;
		temp[index] = 0;
		setShowLetter(temp);
	};

	async function nextQuestion() {
		setLetters([...questionList1[count + 1].question.split("")]);
		setShowLetter(new Array(letters.length).fill(0));
		setImg(questionList1[count + 1].url);
		setCount(count + 1);
		console.log(count, letters, img);
	}

	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					src={img}
					alt="Question image"
					layout="fill"
					objectFit="contain"
				/>
			</div>

			<div className={styles.questionWrapper}>
				{letters.map((letter, index) => {
					<button
						key={index}
						onClick={() => handleShowLetter(index)}
					>
						{letter}
					</button>;
				})}
				<button
					className={styles.nextBtn}
					onClick={() => nextQuestion()}
					// disabled={count >= questionList1.length}
				>
					Next question
				</button>
			</div>
		</div>
	);
}
