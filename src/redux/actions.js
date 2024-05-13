import { getQuizzes , getMoreQuizzes} from "../data/quizzes";

export const FETCH_QUIZZES_REQUEST = 'FETCH_QUIZZES_REQUEST';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_FAILURE = 'FETCH_QUIZZES_FAILURE';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const RESET_QUESTION ='RESET_QUESTION';
export const RESTART_QUIZ = 'RESTART_QUIZ';
export const FETCH_MORE_QUIZZES_REQUEST = 'FETCH_MORE_QUIZZES_REQUEST';
export const FETCH_MORE_QUIZZES_SUCCESS = 'FETCH_MORE_QUIZZES_SUCCESS';
export const FETCH_MORE_QUIZZES_FAILURE = 'FETCH_MORE_QUIZZES_FAILURE';
export const SET_QUIZ_RESULTS = 'SET_QUIZ_RESULTS';
export const RESET_QUIZ_RESULT = 'RESET_QUIZ_RESULT';
export const NEXT_QUIZ = 'NEXT_QUIZ';

export const fetchQuizzesRequest = () => ({
    type: FETCH_QUIZZES_REQUEST,
});

export const fetchQuizzesSuccess = (quizzes) => ({
    type: FETCH_QUIZZES_SUCCESS,
    payload: quizzes,
});

export const fetchQuizzesFailure = (error) => ({
    type: FETCH_QUIZZES_FAILURE,
    payload: error
});

export const selectAnswer = (answer) => ({
    type: SELECT_ANSWER,
    payload: answer
});

export const nextQuestion = () => ({
    type: NEXT_QUESTION,
});

export const resetQuestion = () => ({
    type: RESET_QUESTION,
});

export const restartQuiz = () => ({
    type: RESTART_QUIZ,
});

export const fetchMoreQuizzesRequest = () => ({
    type: FETCH_MORE_QUIZZES_REQUEST,
});

export const fetchMoreQuizzesSuccess = (quizzes) => ({
    type: FETCH_MORE_QUIZZES_SUCCESS,
    payload: quizzes,
});

export const fetchMoreQuizzesFailure = (error) => ({
    type: FETCH_MORE_QUIZZES_FAILURE,
    payload: error
});

export const setQuizResults = () => ({
    type: SET_QUIZ_RESULTS,
});

export const resetQuizResults = () => ({
    type: RESET_QUIZ_RESULT,
});

export const setNextQuiz = () => ({
    type: NEXT_QUIZ,
});

export const fetchQuizzesAsync = () => async (dispatch) => {
    dispatch(fetchQuizzesRequest());
    try {
        const quizzes = await getQuizzes();
        dispatch(fetchQuizzesSuccess(quizzes));
    } catch {
        dispatch(fetchQuizzesFailure(error.message));
    }
}

export const fetchMoreQuizzesAsync = () => async (dispatch) => {
    dispatch(fetchMoreQuizzesRequest());
    try {
        const moreQuizzes = await getMoreQuizzes();
        dispatch(fetchMoreQuizzesSuccess(moreQuizzes));
    } catch {
        dispatch(fetchMoreQuizzesFailure(error.message));
    }
}