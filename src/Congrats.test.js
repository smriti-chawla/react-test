import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from './Congrats';

const defaultProps = { success: false };

/**
 * Factory function to create  a shallowWrapper for the App component.
 * @function setup
 * @param {Object} props - component props specific to this setup.
 * @param {Object} state - initial state for the setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<Congrats {...setUpProps} />);
    return wrapper
};


test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when success props is false', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non empty congrats message when success props is true', () =>  {
    const wrapper = setup({success: true});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text().length).toBeGreaterThan(0);
});

test('doesnt throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
});