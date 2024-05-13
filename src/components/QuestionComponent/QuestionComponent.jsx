import './QuestionComponent.scss';

function QuestionComponent({ question, onAnswerSelect, showFeedback }) {

    const onClickOfAnswer = (answer, index) => {
      showFeedback = !showFeedback;
      onAnswerSelect(answer);
    }
  
    return (
      <div className="question-container">
        <h2>{question.text}</h2>
        <ul>
            {
              question.incorrectAnswers
              .concat(question.correctAnswer)
              .sort(() => Math.random() - 0.5)
              .map((answer, index) => {
                return (
                  <li key={index}
                  
                  onClick={() => onClickOfAnswer(answer, index) }
                  >
                  {answer}
                  </li>
                )              
              })
            }
        </ul>
      </div>
    )
  
  }
  
  export default QuestionComponent;