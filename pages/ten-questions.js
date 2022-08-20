import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/TenQuestions.module.css";

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(
    primaryQuestions[Math.floor(Math.random() * (primaryQuestions.length + 1))]
  );
  const [questionCount, setQuestionCount] = useState(0);
  const [questionRotate, setQuestionRotate] = useState(false);
  const [isMyTurn, setIsMyTurn] = useState(true);

  useEffect(() => {
    let randomNumber = Math.floor(
      Math.random() * (primaryQuestions.length + 1)
    );
    setCurrentQuestion(primaryQuestions[randomNumber]);
    setQuestionCount(questionCount + 1);
  }, [isMyTurn]);

  return (
    <div className={styles.container}>
      <Head>
        <title>10 Questions</title>
        <meta name="description" content="10 Questions" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h4 className={styles.count}>Count: {questionCount}</h4>
      <main className={styles.main}>
        <button
          onClick={() => setQuestionRotate(!questionRotate)}
          className={questionRotate ? styles.buttonrotate : styles.button}
        >
          {currentQuestion}
        </button>

        <button
          onClick={() => (setIsMyTurn(!isMyTurn), setQuestionRotate(!isMyTurn))}
          className={isMyTurn ? styles.done : styles.donerotate}
        >
          Next question
        </button>
      </main>
    </div>
  );
}

const primaryQuestions = [
  "Chia sẻ một mẹo nhỏ để cải thiện năng suất của riêng bạn?",
  "Đồ uống yêu thích của bạn là gì?",
  "Một lời khuyên hoặc bài học tâm đắc nhất bạn được tiền bối chia sẻ cho.",
  "Nếu được học thêm 1 kĩ năng bất kì thì bạn sẽ chọn kĩ năng nào?",
  "Kể tên 3 bài hát bạn tự tin có thể karaoke cháy hết mình.",
  "Kể tên 2 món ăn bạn thích nhất.",
  "Ba đặc điểm tính cách được bạn đánh giá cao? Ví dụ: đúng giờ, ga lăng, gọn gàng, hài hước,...",
  "Nếu được đi du lịch nước ngoài, bạn sẽ ghé thăm nước nào, và tại sao?",
  "Bạn thích tự nấu ăn hay đi ăn ngoài hơn?",
  "Bạn thích phối đồ theo kiểu nào? Ví dụ: áo tay lỡ + quần ôm, áo cánh dơi + váy,...",
  "Bạn được host 1 talkshow của riêng mình. Bạn sẽ mời khách mời nổi tiếng nào?",
  "Bạn sẽ làm gì để cải thiện tâm trạng khi chán?",
  "Nếu có siêu năng lực thì bạn sẽ chọn năng lực nào?",
  "Bạn thích đi biển hay lên núi hơn. Cụ thể là Nha Trang hay Đà Lạt :)))",
  "Bạn thuộc team chó hay team mèo, và hiện tại có đang nuôi thú cưng không?",
  "Nếu có một điều ước thì bạn sẽ dành điều ước đó cho ai (bản thân, gia đình, bạn bè, nhân loại)?",
  "Môn học bạn giỏi nhất và dở nhất là gì?",
  "Lúc nhỏ, bạn muốn lớn lên sẽ làm nghề gì?",
];
