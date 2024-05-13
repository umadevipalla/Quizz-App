import { useState } from 'react';
import QuestionComponent from '../QuestionComponent/QuestionComponent';
import ResultComponent from '../ResultComponent/ResultComponent';
import './QuizComponent.scss';
import { getMessage } from '../../data/messages';

function QuizComponent({ currentQuiz, currentQuestionIndex, selectedAnswer, onQuizResults, onAnswerSelect,
   onNextQuestion, onRestartQuiz, quizResults, currentQuizIndex, quizLength, onNextQuiz, onLoadMoreQuizzes}) {

  const [showFeedback , setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setShowFeedback(true);
    onAnswerSelect(answer)
    if (currentQuiz?.questions[currentQuestionIndex].correctAnswer === answer) {
      onQuizResults();
    }
  }

  const handleNextQuestion = () => {
    setShowFeedback(false);
    onNextQuestion();
  }

    return (
      <div className='quiz-container'>
        <h1>{currentQuiz?.title}</h1>
        <span className='active-question-no'>{currentQuiz?.questions.length > currentQuestionIndex ? currentQuestionIndex + 1 : currentQuestionIndex }</span>
        <span className='total-questions'>/{currentQuiz?.questions.length}</span>
        { 
        currentQuestionIndex < currentQuiz?.questions.length ? (
          <div>
            <QuestionComponent 
            question={currentQuiz.questions[currentQuestionIndex]}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showFeedback={showFeedback}
            />
          {showFeedback &&(
            <div>
              {selectedAnswer === currentQuiz?.questions[currentQuestionIndex].correctAnswer ? (
                <p style={{color: 'green'}}>Correct! {getMessage()}</p>
              ) : (
                <p style={{color: 'red'}}>
                  Incorrect... Correct answer is: <span style={{textDecoration: 'line-through'}}>{currentQuiz.questions[currentQuestionIndex].correctAnswer}</span>
                </p>
              )}
              <button onClick={handleNextQuestion}>Next</button>
            </div>
          )}
          </div>
        ) : (
          <ResultComponent 
          totalQuestions={currentQuiz?.questions.length} 
          onRestartQuiz={onRestartQuiz} 
          quizResults={quizResults} 
          currentQuizIndex={currentQuizIndex}
          quizLength={quizLength}
          onNextQuiz={onNextQuiz}
          onLoadMoreQuizzes={onLoadMoreQuizzes}
          />
        )
        }
      </div>
    )

  }
  
  export default QuizComponent;