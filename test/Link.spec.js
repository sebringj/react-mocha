import React from 'react';
import Link from '../src/Link';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

describe('Link', () => {

  it('Link changes the class when hovered', () => {
    const wrapper = mount(
      <Link page="http://www.facebook.com" onClick={() => {}}>Facebook</Link>
    );
    const link = wrapper.find('a');
    expect(link.node.className).to.equal('normal');
    link.simulate('mouseenter');
    expect(link.node.className).to.equal('hovered');
  })

});
