import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS}) // for deep equal check toEqual, tobe can be used for immutable objects

    })
});