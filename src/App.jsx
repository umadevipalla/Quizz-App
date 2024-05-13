import { useEffect, useState } from 'react'
import './App.scss'
import QuizComponent from './components/QuizComponent/QuizComponent';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, nextQuestion, restartQuiz, fetchQuizzesAsync, fetchMoreQuizzesAsync,
   setQuizResults, resetQuizResults, setNextQuiz, resetQuestion } from '../src/redux/actions';

function App() {

  const dispatch = useDispatch();
  const {quizzes, loading, error, currentQuizIndex, currentQuestionIndex, selectedAnswer, quizResults} = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchQuizzesAsync());
  }, [dispatch]);

  const handleAnswerSelect = (answer) => {
    dispatch(selectAnswer(answer));
  }

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  }

  const handleRestartQuiz = () => {
    dispatch(restartQuiz());
    dispatch(resetQuizResults());
  }

  const handleLoadMoreQuizzes = () => {
    dispatch(fetchMoreQuizzesAsync());
  }

  const handleQuizResult = () => {
    dispatch(setQuizResults())
  }

  const handleNextQuiz = () => {
    dispatch(setNextQuiz())
    dispatch(resetQuestion())
    dispatch(resetQuizResults());
  }

  return (
    <div className='app-container'>
      <div className='app-header'>Quizz App</div>
      <QuizComponent 
      currentQuiz={quizzes[currentQuizIndex]}
      currentQuestionIndex ={currentQuestionIndex}
      selectedAnswer={selectedAnswer}
      onQuizResults={handleQuizResult}
      onAnswerSelect={handleAnswerSelect}
      onNextQuestion={handleNextQuestion}
      onRestartQuiz={handleRestartQuiz}
      quizResults={quizResults}
      currentQuizIndex={currentQuizIndex}
      quizLength={quizzes.length}
      onNextQuiz={handleNextQuiz}
      onLoadMoreQuizzes={handleLoadMoreQuizzes}
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  )
}

export default App
