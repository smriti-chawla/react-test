import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from "../test/testUtils";
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create  a shallowWrapper for the App component.
 * @function setup
 * @param {Object} props - component props specific to this setup.
 * @param {Object} state - initial state for the setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
    const wrapper = shallow(<Congrats {...props} />);
    return wrapper
};


test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when success props is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non empty congrats message when success props is true', () =>  {
    const wrapper = setup({success: true})
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text().length).toBeGreaterThan(0);
});