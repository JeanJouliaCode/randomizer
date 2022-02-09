
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

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

  test("answer returned by the wheel should be displayed", async () => {
    await wrapper.find('.home__spiningWheel').vm.$emit('answer', { answer: "test" })
    const value = wrapper.find('.home__answer').text()
    expect(value).toContain("test");
  });
});