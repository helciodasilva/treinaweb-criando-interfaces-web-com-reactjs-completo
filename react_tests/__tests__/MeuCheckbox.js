import React from 'react';
import {shallow} from 'enzyme';
import MeuCheckbox from '../MeuCheckbox';

it('MeuCheckbox tem que mudar o texto depois do clique', () => {
  const checkbox = shallow(
    <MeuCheckbox labelOn="On" labelOff="Off" />
  );

  expect(checkbox.find('#meuSpan').text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.find('#meuSpan').text()).toEqual('On');
});

it('MeuCheckbox deve ter o total de cliques igual a 2', () => {
  const checkbox = shallow(
    <MeuCheckbox labelOn="On" labelOff="Off" />
  );

  checkbox.find('input').simulate('change').simulate('change');
  expect(checkbox.state().totalClicks).toEqual(2);
});