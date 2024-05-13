import { getMessage } from '../../data/messages';
import './ResultComponent.scss';
function ResultComponent({ totalQuestions, onRestartQuiz, quizResults, currentQuizIndex, quizLength, onNextQuiz, onLoadMoreQuizzes }) {

  return (
      <div className='result-container'>
      <h1>Quiz Summary</h1>
      <p>Total questions: {totalQuestions}</p>
      <p>Correct answers: {quizResults}</p>
      <div className='button-container'>
        <button onClick={onRestartQuiz}>Restart Quiz</button>
        {currentQuizIndex < quizLength-1 && (
          <button onClick={onNextQuiz}>Next Quiz</button>
        )}
        {currentQuizIndex >= quizLength-1 && (
          <button onClick={onLoadMoreQuizzes}>Load More Quizzes</button>
        )}
      </div>
    </div>
    )
  
  }
  
  export default ResultComponent;