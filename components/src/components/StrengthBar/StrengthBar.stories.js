import { action } from '@storybook/addon-actions';
import StrengthBar from './StrengthBar';

export default {
  component: StrengthBar,
  title: 'Components/StrengthBar',
};

const Template = (args, { argTypes }) => ({
  components: { StrengthBar },
  props: Object.keys(argTypes),
  template: '<StrengthBar v-bind="$props" @result="action"/>',
  methods: {
    action: action("result"),
  },
});

export const Active = Template.bind({});
