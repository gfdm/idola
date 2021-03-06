import { mount, createLocalVue } from '@vue/test-utils'
import IdCard from '../'

const localVue = createLocalVue()
localVue.use(IdCard)

describe('IdCard', () => {
  test('should render well', () => {
    const Wrapper = {
      name: 'wrap',
      template: `
        <id-card>
          <span slot="title">Default</span>
          Content
        </id-card>
      `
    }

    const wrapper = mount(Wrapper, {
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
