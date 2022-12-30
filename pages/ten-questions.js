import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/TenQuestions.module.css";

export default function Game(props) {
	const [currentQuestion, setCurrentQuestion] = useState();
	const [questionList, setQuestionList] = useState([]);
	const [questionRotate, setQuestionRotate] = useState(false);
	const [isMyTurn, setIsMyTurn] = useState(true);
	const [answeredQuestions, setAnsweredQuestions] = useState([]);
	const [showNextButton, setShowNextButton] = useState(true);

	useEffect(() => {
		setQuestionList(props.primaryQuestions);
	}, [props.primaryQuestions]);

	function handleClick() {
		if (answeredQuestions.length === questionList.length) {
			setCurrentQuestion("Hết rùi :3");
			setShowNextButton(false);
			return;
		}
		let randomNumber = 0;
		while (answeredQuestions.includes(randomNumber)) {
			randomNumber = Math.floor(Math.random() * questionList.length);
		}
		setCurrentQuestion(questionList[randomNumber]);
		setAnsweredQuestions([...answeredQuestions, randomNumber]);
		setIsMyTurn(!isMyTurn);
		setQuestionRotate(!isMyTurn);
	}

	return (
		<div className={styles.container}>
			<h4 className={styles.count}>Count: {answeredQuestions.length}</h4>
			<main className={styles.main}>
				<button
					onClick={() => setQuestionRotate(!questionRotate)}
					className={
						questionRotate ? styles.buttonrotate : styles.button
					}
				>
					{currentQuestion}
				</button>
				{showNextButton ? (
					<button
						onClick={handleClick}
						className={isMyTurn ? styles.done : styles.donerotate}
					>
						Next question
					</button>
				) : (
					<Link href="/">
						<a className={styles.link}>Back to Home</a>
					</Link>
				)}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: { primaryQuestions },
	};
}

const primaryQuestions = [
	"Đồ uống yêu thích của bạn là gì?",
	"Nếu được học thêm 1 kĩ năng bất kì thì bạn sẽ chọn kĩ năng nào?",
	"Kể tên 3 bài hát mà bạn tự tin hát karaoke được.",
	"Kể tên 3 món ăn mà bạn thích nhất.",
	"Bạn thường làm gì vào thời gian rảnh?",
	"Ba tính cách của người khác phái mà bạn thích nhất.",
	"Nếu có tiền thì bạn sẽ đi du lịch ở đâu?",
	"Chia sẻ một điều xảy ra gần đây làm bạn vui?",
	"Bạn thích tự nấu ăn hay đi ăn ngoài hơn?",
	"Nếu được host 1 talkshow của riêng mình thì bạn sẽ mời người nổi tiếng nào?",
	"Bạn làm gì để cải thiện tâm trạng khi chán?",
	"Nếu có siêu năng lực thì bạn sẽ chọn năng lực nào?",
	"Bạn thích đi biển hay lên núi hơn?",
	"Nếu có thể hóa thân thành 1 con vật, bạn muốn làm con vật nào?",
	"Nếu có một điều ước thì bạn sẽ dành điều ước đó cho ai?",
	"Ước mơ lúc nhỏ của bạn là gì?",
	"Bạn thích mùa nào nhất trong một năm?",
	"Bạn thích loại thức uống nào nhất?",
	"Bạn có sợ điều gì không?",
	"Biệt danh bạn thích được gọi nhất là gì?",
];
