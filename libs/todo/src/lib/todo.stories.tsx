import { Story, Meta } from '@storybook/react';
import { Todo, TodoProps } from './todo';

export default {
  component: Todo,
  title: 'Todo',
} as Meta;

const Template: Story<TodoProps> = (args) => <Todo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  prefix: "Books"
};
