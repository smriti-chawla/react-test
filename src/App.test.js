import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { render } from '@testing-library/react';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

// it('renders without crashing', ()=>{
//   const wrapper = shallow(<App />)
//   // console.log(wrapper.debug())
//   expect(wrapper).toBeTruthy()
//
// })
/**
 * Factory function to create  a shallowWrapper for the App component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @param {object} state - initial state for the setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper
}

/**
 * Return ShallowWrapper containing nodes(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
};

test('renders without error', ()=>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app") ;//kabab case
  expect(appComponent.length).toBe(1)
});



test('renders display counter', ()=>{
  const wrapper = setup();
  const counter = findByTestAttr(wrapper,"counter-display") ;//kabab case
  expect(counter.length).toBe(1)
});

test('counter starts at 0', ()=>{
 const wrapper = setup();
 const initialCounterstate = wrapper.state("counter");
  expect(initialCounterstate).toBe(0);
});



describe('Increment', () => {
  test('renders increment button' , ()=>{
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "increment-button") ;//kabab case
    expect(incrementButton.length).toBe(1)
  });
  test('clicking button increments counter display, state', ()=>{
    const counter = 7;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate('click');

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
  });
});

describe('Decrement', () => {
  test('renders decrement counter', () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, 'decrement-counter');
    expect(decrementButton.length).toBe(1)
  });

  test('clicking button decrement counter display state', () => {
    const counter = 1;
    const wrapper = setup(null, {counter});

    // find button and click
    const decrementButton = findByTestAttr(wrapper, 'decrement-counter');
    decrementButton.simulate('click');

    //find counter display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1);
  });

  // make sure error doesn't show by default
  test('error does not show when not needed', () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'counter-error');
    expect(errorDiv.length).toBe(0);
  });

  describe('counter is 0 and decrement button is clicked', () => {
    // using a describe here so I can use a "beforeEach" for shared setup
    // scoping wrapper to the describe, so it can be used in beforeEach and the tests
    let wrapper;
    beforeEach(() => {
      // no need to set counter value here; default value of 0 is good
      wrapper = setup();

      // find button and click
      const button = findByTestAttr(wrapper, 'decrement-counter');
      button.simulate('click');
    });

    test('error shows', () => {
      // check the class of the error message
      //find counter display and test value
      const counterDisplay = findByTestAttr(wrapper, 'counter-error');
      expect(counterDisplay.length).toBe(1);
    });

    test('counter still displays 0', () => {
      const counterDisplay = findByTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(0);
    });

    test('clicking increment clears the error', () => {
      // find increment button and click
      const incrementButton = findByTestAttr(wrapper, 'increment-button');
      incrementButton.simulate('click');

      //find counter display and test value
      const counterDisplayErr = findByTestAttr(wrapper, 'counter-error');
      expect(counterDisplayErr.length).toBe(0);
    });
  });
});







