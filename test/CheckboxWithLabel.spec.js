import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../src/CheckboxWithLabel';
import { expect } from 'chai';

describe('CheckboxWithLabel', () => {
  // Render a checkbox with label in the document

  it('CheckboxWithLabel changes the text after click', () => {
    const checkbox = shallow(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );
    expect(checkbox.text()).to.equal('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).to.equal('On');
  });
});
