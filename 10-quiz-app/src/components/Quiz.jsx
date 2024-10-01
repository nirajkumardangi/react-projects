import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleClick(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  console.log(userAnswers);

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleClick(answer)}>{answer}on</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
