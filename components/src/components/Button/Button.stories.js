/* eslint-disable import/no-extraneous-dependencies */
//import { action } from '@storybook/addon-actions';
import Button from './Button.vue';

export default {
  component: Button,
  title: 'Components/Button',
};

// export const actionsData = {
//   onPinTask: action('pin-task'),
//   onArchiveTask: action('archive-task'),
// };

const Template = args => ({
  components: { Button },
  setup() {
    //return { args, ...actionsData };
    return { args };
  },
  template: '<Task v-bind="args" />',
});

export const Active = Template.bind({});
Active.args = {
  label: 'active'
  ,
};

export const Disabled = Template.bind({});
Active.args = {
  label: "disabled",
  disabled: true,
};
