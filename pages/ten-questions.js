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
	"Thức uống yêu thích của bạn là gì?",
	"Nếu được học/bồi dưỡng 1 kĩ năng bất kì thì bạn sẽ chọn kĩ năng nào?",
	"Kể tên 3 bài hát gần đây bạn hay nghe.",
	"Kể tên 3 món ăn ưa thích của bạn.",
	"Bạn có hoạt động ưa thích nào được làm trong thời gian rảnh?",
	"Bạn có thể chia sẻ về lần gần nhất bạn học được 1 điều gì đó mới không? (kĩ năng, kinh nghiệm cuộc sống,...)",
	"Ba đặc điểm ở người khác phái mà bạn ấn tượng nhất.",
	"Bạn thích đi du lịch không? Nếu được chọn 1 nước bất kì, bạn sẽ đi đâu?",
	"Bạn thích tự nấu ăn hay đi ăn ngoài hơn?",
	"Nếu có siêu năng lực thì bạn sẽ chọn năng lực nào?",
	"Nếu có thể hóa thân thành 1 con vật, bạn muốn làm con vật nào?",
	"Nếu có một điều ước thì bạn sẽ dành điều ước đó cho ai?",
	"Ước mơ lúc nhỏ của bạn là gì?",
	"Bạn thích mùa nào nhất trong một năm?",
	"Bạn có xu hướng lo lắng/mất bình tĩnh vì những điều gì? (yếu tố bất ngờ, áp lực,...)",
];
