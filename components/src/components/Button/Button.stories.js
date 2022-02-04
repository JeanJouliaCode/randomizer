import { action } from '@storybook/addon-actions';
import Button from './Button.vue';

export default {
  component: Button,
  title: 'Components/Button',
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" @click="action"/>',
  methods: {
    action: action("click"),
  },
});

export const Active = Template.bind({});
Active.args = {
  label: 'active'
  ,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'disabled',
  disabled: true,
};
