
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import API from '@/services/api.js';

let wrapper;

beforeEach(() => {
  wrapper = mount(Home, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Home', () => {

  test('text return by the textArea should be formated in a list format', async () => {
    await wrapper.find('.home__textArea').vm.$emit("input", "test1\ntest2\n \r\ntest3")
    expect(wrapper.vm.wheelValues).toStrictEqual(["test1", "test2", "test3"]);
  });

  test('clicking the spin button should call the child spinningWheel spin method', async () => {
    const spinMethod = jest.fn()
    wrapper.vm.$refs.wheel.spin = spinMethod
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 1;
    global.Math = mockMath;

    await wrapper.find('.home__spin-button').trigger('click')

    expect(spinMethod).toBeCalledWith(8);
  });

  test('clicking the spin button should call the api if API is selected', async () => {
    const spinMethod = jest.fn()
    wrapper.vm.$refs.wheel.spin = spinMethod

    await wrapper.setData({ selectedOption: { index: 1, value: "API" } })

    jest.mock('@/services/api.js', () => jest.fn());
    API.getRandomNumberFromAPI = jest.fn(() => ({ success: true, data: 2 }))

    await wrapper.find('.home__spin-button').trigger('click')

    expect(spinMethod).toBeCalledWith(13);
  });

  test('Should not spin if API selected and APi return error', async () => {
    const spinMethod = jest.fn()
    wrapper.vm.$refs.wheel.spin = spinMethod

    await wrapper.setData({ selectedOption: { index: 1, value: "API" } })

    jest.mock('@/services/api.js', () => jest.fn());
    API.getRandomNumberFromAPI = jest.fn(() => ({ success: false }))

    await wrapper.find('.home__spin-button').trigger('click')

    expect(spinMethod).not.toBeCalled();
  });

  test("answer returned by the wheel should be displayed", async () => {
    await wrapper.find('.home__spiningWheel').vm.$emit('answer', { answer: "test" })
    const value = wrapper.find('.home__answer').text()
    expect(value).toContain("test");
  });

  test("should remove answer when clicking the remove answer button", async () => {
    wrapper.vm.testAreaContent = 'test0\ntest1'
    await wrapper.find('.home__spiningWheel').vm.$emit('answer', { answer: "test1", index: 1 })
    await wrapper.findAll('.home__spin-button').at(1).trigger('click')
    expect(wrapper.vm.testAreaContent).toBe("test0");
  });
});