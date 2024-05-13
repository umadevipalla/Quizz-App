import { FETCH_QUIZZES_FAILURE, 
    FETCH_QUIZZES_REQUEST, 
    FETCH_QUIZZES_SUCCESS, 
    NEXT_QUESTION, 
    RESTART_QUIZ, 
    SELECT_ANSWER,
    FETCH_MORE_QUIZZES_REQUEST,
    FETCH_MORE_QUIZZES_SUCCESS,
    FETCH_MORE_QUIZZES_FAILURE,
    SET_QUIZ_RESULTS,
    RESET_QUIZ_RESULT,
    NEXT_QUIZ,
    RESET_QUESTION
 } from "./actions";

const initialState = {
    quizzes: [],
    loading: false,
    error: null,
    currentQuizIndex: 0,
    currentQuestionIndex: 0,
    selectedAnswer: '',
    quizResults: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_QUIZZES_SUCCESS:
            return {
                ...state,
                quizzes: action.payload,
                loading: false,
            }
        case FETCH_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SELECT_ANSWER:
            return {
                ...state,
                selectedAnswer: action.payload,
            }
        case NEXT_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
        case RESET_QUESTION:
            return {
                ...state,
                currentQuestionIndex: 0,
            }
        case RESTART_QUIZ:
            return {
                ...state,
                currentQuizIndex: state.currentQuizIndex,
                currentQuestionIndex: 0,
                selectedAnswer: '',
            }
        case SET_QUIZ_RESULTS: 
            return {
                ...state,
                quizResults: state.quizResults + 1,
            }
        case RESET_QUIZ_RESULT:
            return {
                ...state,
                quizResults: 0
            }
        case NEXT_QUIZ:
            return {
                ...state,
                currentQuizIndex: state.currentQuizIndex + 1
            }
        case FETCH_MORE_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_MORE_QUIZZES_SUCCESS:
            return {
                ...state,
                quizzes: [ ...state.quizzes, ...action.payload],
                loading: false,
            }
        case FETCH_MORE_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
    return state;
}

export default reducer;