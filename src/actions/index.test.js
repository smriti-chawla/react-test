import moxios from 'moxios';

import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";
import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS}) // for deep equal check toEqual, tobe can be used for immutable objects

    })
});


describe('getSecretWord action creator', function () {
    beforeEach(() => {
        moxios.install(); // if axios instance present import and pass as argument
    });
    afterEach(() => {
        moxios.uninstall()
    });
    test('adds response word to state', () => {
        const secretWord = 'party';
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: secretWord,
            });
        });
        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
            })
    });
});