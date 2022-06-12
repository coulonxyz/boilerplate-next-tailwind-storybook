import { Meta, Story } from '@storybook/react';
import React from 'react';

import HelloWorld, { HelloWorldProps } from './hello-world';

export default {
    title: 'Dumb Components/hello world',
    component: HelloWorld,
} as Meta;

const Template = ({ name }: HelloWorldProps) => <HelloWorld name={name} />;

export const WithShortName: Story<HelloWorldProps> = Template.bind({});
WithShortName.args = {
    name: 'Joe',
};
WithShortName.storyName = 'with short name';

export const WithLongName: Story<HelloWorldProps> = Template.bind({});
WithLongName.args = {
    name: 'Constantine',
};
WithLongName.storyName = 'with long name';
