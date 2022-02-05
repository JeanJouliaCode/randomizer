import { action } from '@storybook/addon-actions';
import TextArea from './TextArea.vue';

export default {
  component: TextArea,
  title: 'Components/TextArea',
};

const Template = (args, { argTypes }) => ({
  components: { TextArea },
  props: Object.keys(argTypes),
  template: '<TextArea v-bind="$props" @input="action"/>',
  methods: {
    action: action("input"),
  },
});

export const Default = Template.bind({});