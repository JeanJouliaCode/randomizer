
import { shallowMount } from '@vue/test-utils';
import TextArea from './TextArea.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(TextArea, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('TextArea', () => {
  test('fire event when value change', () => {
    wrapper.find('textarea').setValue("test")
    const actual = wrapper.emitted('input');
    expect(actual).toStrictEqual([["test"]]);
  });
});