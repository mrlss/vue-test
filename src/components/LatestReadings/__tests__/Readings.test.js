import { describe, expect, it } from 'vitest'

import Readings from '@/components/LatestReadings/Readings.vue'
import { mockData } from '@/utils'
import { mount } from '@vue/test-utils'

describe('Readings', () => {
  it('renders correctly with default props', async () => {
    const wrapper = mount(Readings, {
      props: {
        articles: mockData
      }
    })

    expect(wrapper.props('maxAmountToShow')).toBe(5)
    expect(wrapper.props('expirationDayAmount')).toBe(7)

    // Wait for Vue to update the DOM
    await wrapper.vm.$nextTick()

    // Assert on the rendered items
    const renderedItems = wrapper.findAllComponents({ name: 'Item' })
    expect(renderedItems.length).toBe(5) // Assuming maxAmountToShow is 5
  })

  it('has both checkboxes checked by default', async () => {
    const wrapper = mount(Readings, {
      props: {
        articles: mockData
      }
    })

    // Wait for Vue to update the DOM
    await wrapper.vm.$nextTick()

    // Assert that checkboxes are checked by default
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox) => {
      expect(checkbox.element.checked).toBe(true)
    })
  })

  it('renders empty message when no items are shown', async () => {
    const wrapper = mount(Readings, {
      props: {
        articles: []
      }
    })

    // Wait for Vue to update the DOM
    await wrapper.vm.$nextTick()

    // Assert that the empty message is rendered
    const emptyMessage = wrapper.find('.empty-message')
    expect(emptyMessage.exists()).toBe(true)
    expect(emptyMessage.text()).toContain('Please select at least one category above.')
  })
})
