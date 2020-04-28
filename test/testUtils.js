import checkPropTypes from 'check-prop-types';
import { createStore } from "redux";

import rootReducer from '../src/reducers';

/**
 * create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer.
 * @param initialState -  Initial state of the store.
 * @function storeFactory
 * @return {Store} - Redux Store.
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
};

/**
 * Return ShallowWrapper containing nodes(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`)

};

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};