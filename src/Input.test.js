import React from 'react';
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from './Input';

/**
 * Factory function to create  a shallowWrapper for the App component.
 * @function setup
 * @param {Object} initialState - initial state for this setup.
 * @return {ShallowWrapper}
 */
const setup = (initialState ={}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive(); // dive method returns the react child component of the react shallow wrapper
    return  wrapper;
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success : false };
            wrapper = setup(initialState);
        });
        test('renders components without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1); //assertion
        });
        test('render Submit Button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
        test('render Input Box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });

    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success : true };
            wrapper = setup(initialState);
        });
        test('renders components without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1); //assertion

        });
        test('does not render Submit Button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);

        });
        test('does not render Input Box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
    })

});

describe('updating of state', () => {

});
