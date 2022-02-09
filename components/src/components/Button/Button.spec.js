
import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Button, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Button', () => {
  test('fire when clicked', () => {
    wrapper.find('.my-button').trigger('click')
    const actual = wrapper.emitted()['click'];
    expect(actual).toBeTruthy();
  });

  test("don't fire when disabled", async () => {
    await wrapper.setProps({ disabled: true })
    wrapper.find('.my-button').trigger('click')
    const actual = wrapper.emitted()['click'];
    expect(actual).toBeUndefined();
  });
});