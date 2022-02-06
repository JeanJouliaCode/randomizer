import { action } from '@storybook/addon-actions';
import SpinningWheel from './SpinningWheel.vue';

export default {
  component: SpinningWheel,
  title: 'Components/SpinningWheel',
};

const Template = (args, { argTypes }) => ({
  components: { SpinningWheel },
  props: Object.keys(argTypes),
  template: '<SpinningWheel v-bind="$props" @answer="action"/>',
  methods: {
    action: action("answer"),
  },
});

export const Base = Template.bind({});
Base.args = {
  values: ['test0', 'test1', 'test2', 'test3', 'test4']
  ,
};
