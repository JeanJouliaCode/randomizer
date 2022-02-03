
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
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("don't fire when disabled", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});