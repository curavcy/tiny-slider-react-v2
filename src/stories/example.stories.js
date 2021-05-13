import React from 'react';
import SliderExample from '../components/example/index';

export default {
  title: 'Example/Slider',
  component: SliderExample,
};

const Template = (args) => <SliderExample { ...args } />;

export const Basic = Template.bind({});
Basic.args = {};

