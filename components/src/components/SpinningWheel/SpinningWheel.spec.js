
import { mount } from '@vue/test-utils';
import SpinningWheel from './SpinningWheel.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(SpinningWheel, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SpinningWheel', () => {
  test('spin when clicked', async () => {
    const testMethod = jest.fn()
    wrapper.vm.spin = testMethod
    await wrapper.setProps({ canBeClicked: true })

    wrapper.find('.spinning-wheel').trigger('click')

    wrapper.vm.spinOnClick();
    expect(testMethod).toBeCalled();
  });

  test("don't spin when cliked disabled", async () => {
    const testMethod = jest.fn()
    wrapper.vm.spin = testMethod

    wrapper.find('.spinning-wheel').trigger('click')

    wrapper.vm.spinOnClick();
    expect(testMethod).not.toBeCalled();
  });

  test("getIndexAnswer return answer for given angle", async () => {
    await wrapper.setProps({ values: ['test', 'test1'] })

    const answer1 = wrapper.vm.getIndexAnswer(0.7);
    const answer2 = wrapper.vm.getIndexAnswer(2.1);

    expect(answer1).toBe(0)
    expect(answer2).toBe(1)
  });

  test("getColor return color at given index", async () => {
    await wrapper.setProps({ colors: ['blue', 'red', 'green'] })
    await wrapper.setProps({ values: ['test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6'] })

    const color1 = wrapper.vm.getColor(0);
    const color2 = wrapper.vm.getColor(1);
    const color3 = wrapper.vm.getColor(2);
    const color4 = wrapper.vm.getColor(3);
    const color5 = wrapper.vm.getColor(4);

    expect([color1, color2, color3, color4, color5]).toStrictEqual(['blue', 'red', 'green', 'blue', 'red'])
  });

  test("getColor return the same color side by side", async () => {
    await wrapper.setProps({ colors: ['blue', 'red', 'green'] })
    await wrapper.setProps({ values: ['test', 'test1', 'test2', 'test3'] })

    const color1 = wrapper.vm.getColor(0);
    const color2 = wrapper.vm.getColor(3);

    expect(color1).toBe('blue')
    expect(color2).toBe('red')
  });

  test("getAnimationTime return the right time of the animation", async () => {
    await wrapper.setProps({ values: ['test', 'test1'] })

    const time1 = wrapper.vm.getAnimationTime(2.2);
    const time2 = wrapper.vm.getAnimationTime(4.4);

    expect(time1).toBe(1.54)
    expect(time2).toBe(2.2)
  });
});