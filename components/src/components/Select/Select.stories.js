import { action } from '@storybook/addon-actions';
import Select from './Select.vue';

export default {
  component: Select,
  title: 'Components/Select',
};

const Template = (args, { argTypes }) => ({
  components: { Select },
  props: Object.keys(argTypes),
  template: '<Select v-bind="$props" @input="action"/>',
  methods: {
    action: action("input"),
  },
});

export const Default = Template.bind({});

Default.args = {
  options: ['option0', 'option1', 'option2', 'option3', 'option4'],
};