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
        test('renders components without error', () => {

        });
        test('render Submit Button', () => {

        });
        test('render Input Box', () => {

        });

    });
    describe('word has been guessed', () => {
        test('renders components without error', () => {

        });
        test('doesnot render Submit Button', () => {

        });
        test('doesnot render Input Box', () => {

        });
    })

});

describe('updating of state', () => {

});

