import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { render } from '@testing-library/react';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

// it('renders without crashing', ()=>{
//   const wrapper = shallow(<App />)
//   // console.log(wrapper.debug())
//   expect(wrapper).toBeTruthy()
//
// })

test('renders without error', ()=>{
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]') ;//kabab case
  expect(appComponent.length).toBe(1)
});

test('renders increment button' , ()=>{

});

test('renders display counter', ()=>{})

test('counter starts at 0', ()=>{})

test('clicking button increments counter display, state', ()=>{})