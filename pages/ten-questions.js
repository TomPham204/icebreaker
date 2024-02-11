import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/TenQuestions.module.css";

export default function Game(props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [questionList, setQuestionList] = useState([]);
	const [questionRotateToPlayer, setQuestionRotateToPlayer] = useState(0);
	const [player, setPlayer] = useState(0);
	const [showNextButton, setShowNextButton] = useState(true);

	useEffect(() => {
		const randomizedQuestions = props.primaryQuestions.sort(
			() => Math.random() - 0.5
		);
		setQuestionList([...randomizedQuestions, "The end"]);
	}, [props.primaryQuestions]);

	function handleClick() {
		if (currentIndex >= questionList.length) {
			setShowNextButton(false);
			setCurrentIndex(questionList.length - 1);
			setQuestionRotateToPlayer(1);
			return;
		}

		const nextPlayer = 1 - player;

		setCurrentIndex(currentIndex + 1);
		setPlayer(nextPlayer);
		setQuestionRotateToPlayer(nextPlayer);
	}

	function getRotateEffect() {
		const random = (Math.floor(Math.random() * 10) % 2) + 1;
		return questionRotateToPlayer == 1
			? styles.question
			: styles.question + " " + styles[`question_rotate_${random}`];
	}

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<button
					onClick={() =>
						setQuestionRotateToPlayer(1 - questionRotateToPlayer)
					}
					className={getRotateEffect()}
				>
					{questionList[currentIndex]}
				</button>

				{showNextButton ? (
					<button
						onClick={handleClick}
						className={
							player == 0 ? styles.next : styles.next_rotate
						}
					>
						Next question
					</button>
				) : (
					<Link href="/">
						<a className={styles.link}>Back to Home</a>
					</Link>
				)}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: { primaryQuestions },
	};
}

const primaryQuestions = [
	"Nếu có thể hóa thân thành 1 con vật, bạn muốn làm con gì?",
	"Bạn có đam mê hay sở thích nào không?",
	"Thức uống yêu thích của bạn là gì?",
	"Nếu được học thêm 1 kĩ năng bất kì thì bạn sẽ chọn kĩ năng nào?",
	"Bạn có nhóm nhạc ưa thích không?",
	"Điều gì khiến bạn cảm thấy hạnh phúc nhất?",
	"Kỷ niệm đáng nhớ nhất của bạn là gì?",
	"Điều gì thường bị bỏ qua mà bạn mong muốn người khác biết về bạn?",
	"Điều thú vị nhất gần đây bạn học được là gì?",
	"Bạn thích ngày nào nhất trong tuần?",
	"Ba đặc điểm ở người khác phái mà bạn ấn tượng nhất.",
	"Bạn có thích tự nấu ăn không?",
	"Một điều bạn muốn thay đổi ở bản thân mình là gì?",
	"Một điều bạn đã làm mà bạn cảm thấy tự hào nhất?",
	"Bạn có thể chia sẻ 1 dự án bạn đang thực hiện?",
	"Bạn có tin vào định mệnh hay may mắn không?",
	"Bạn có bí mật nào mà bạn chưa từng chia sẻ với ai không?",
];
