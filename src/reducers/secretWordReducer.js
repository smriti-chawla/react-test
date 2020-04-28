import { actionTypes} from "../actions";

/**
 * @function secretWordReducer
 * @param {array} state - array of guessed words.
 * @param {object} action - action to be reduced.
 * @return {boolean} - new guessedWords state.
 */

export default (state = false, action) => {
    switch (action.type) {
        case (actionTypes.SET_SECRET_WORD):
            return action.payload;
        default:
            return state;
    }
}