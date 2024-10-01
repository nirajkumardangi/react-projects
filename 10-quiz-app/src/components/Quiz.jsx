import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import quizCompletedImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  if (quizIsCompleted) {
    return (
      <div id='summary'>
        <img src={quizCompletedImg} alt='Trophy icon' />
        <h2>Quiz is completed</h2>
      </div>
    );
  }

  const shufflingAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shufflingAnswers.sort(() => Math.random() - 0.5);

  const handleClick = useCallback(function handleClick(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipTimer = useCallback(() => {
    handleClick(null);
  }, [handleClick]);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={5000}
          onTimeout={handleSkipTimer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shufflingAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleClick(answer)}>{answer}on</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
