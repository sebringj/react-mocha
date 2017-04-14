import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
// shallow is for immediate children dom, no more
// mount is deep rendering
// render is for pure output
import sinon from 'sinon';
import App from '../src/App';
import { expect } from 'chai';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('changes Link text', () => {
    const wrapper = mount(<App />);
    const link = wrapper.find('a');

    // initial condition
    expect(link.text()).to.equal('Not Clicked');

    // modified condition
    link.simulate('click');
    expect(link.text()).to.equal('Clicked');
  });

  it('changes checkbox label', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('input');
    const label = wrapper.find('label');

    expect(label.text()).to.equal('Off');

    input.simulate('change');

    expect(label.text()).to.equal('On');
  });

});
