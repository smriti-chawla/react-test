import { actionTypes} from "../actions";

/**
 * @function guessedWordReducer
 * @param {array} state - array of guessed words.
 * @param {object} action - action to be reduced.
 * @return {boolean} - new guessedWords state.
 */

export default (state= [], action) => {
    switch (action.type) {
        case (actionTypes.GUESS_WORD):
            return [...state, action.payload];
        default:
            return state;
    }

}