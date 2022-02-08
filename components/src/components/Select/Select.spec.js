
import { shallowMount } from '@vue/test-utils';
import Select from './Select.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Select, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Select', () => {
  test('fire event when value change', async () => {
    await wrapper.setProps({ options: ['test', 'test1', 'test2'] })
    await wrapper.find('.select').findAll('option').at(1).setSelected();
    await wrapper.find('.select').findAll('option').at(1).trigger('input')
    const actual = wrapper.emitted('input');
    expect(actual).toStrictEqual([[{ value: 'test1', index: 1 }]]);
  });
});