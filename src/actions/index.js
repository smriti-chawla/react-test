import axios from 'axios';

import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * @function correctGuess
 * @return {object} - Action object with type CORRECT_GUESS
 */
export function correctGuess() {
    return {
        type: actionTypes.CORRECT_GUESS,
    }
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *      and conditionally CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed Word.
 * @return {function} - Redux Thunk function.
 */
export function guessWord(guessedWord) {
    return function (dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount,
            }
        });
        if (guessedWord === secretWord) {
            dispatch({
                type: actionTypes.CORRECT_GUESS,
            })
        }
    }
}

export function getSecretWord() {
    return (dispatch) => {
     return axios.get('http:localhost:3030').then(response => {
        dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: response.data,
        })
     })
    }
}
