import React from 'react';
import { shallow } from  'enzyme';

import App from './App';
import  { findByTestAttr } from "../test/testUtils";
import { storeFactory } from "../test/testUtils";

/**
 * Factory function to create  a shallowWrapper for the App component.
 * @function setup
 * @param {Object} initialState - initial state for this setup.
 * @return {ShallowWrapper}
 */
const setup = (initialState ={}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive().dive(); // dive method returns the react child component of the react shallow wrapper
    return  wrapper;
};

test('render app component without crashing', () => {
    const wrapper = setup();
    const appComp = findByTestAttr(wrapper, 'component-app');
    expect(appComp.length).toBe(1);

});

describe('redux props', () => {
    test('has success piece of state as props', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test('has secret word piece of state as props', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    test('has guessed word as props', () => {
        const guessedWords = [{
            guessedWord: 'train',
            letterMatchCount: 3
        }];
        const wrapper = setup({ guessedWords });
        const guessedWordProp = wrapper.instance().props.guessedWords;
        expect(guessedWordProp).toEqual(guessedWords);
    });
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessedWordProp = wrapper.instance().props.guessWord;
        expect(guessedWordProp).toBeInstanceOf(Function);
    });
});


