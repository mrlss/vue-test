import { describe, expect, it } from 'vitest'
import { formatDate, mockData } from '@/utils'

import ReadingsItem from '@/components/LatestReadings/Item.vue'
import { mount } from '@vue/test-utils'

describe('ReadingsItem', () => {
  it('renders correctly with non-empty props', () => {
    const DATA = mockData[0]

    const wrapper = mount(ReadingsItem, { props: DATA })

    const title = wrapper.find('.readings__title').text()
    expect(title).toContain(DATA.title)
    const formattedDate = wrapper.find('.readings__date').text()
    expect(formatDate(formattedDate)).toContain(formatDate(DATA.publishDate))
    expect(wrapper.find('a').attributes('href')).toBe(DATA.url)
  })

  it('renders correctly with empty title and category', () => {
    const DATA = {
      title: '',
      url: 'https://example.com',
      category: '',
      publishDate: '2023-01-01T12:00:00.000Z'
    }

    const wrapper = mount(ReadingsItem, { props: DATA })

    const title = wrapper.find('.readings__title').text()
    expect(title).toContain(DATA.title)
    const formattedDate = wrapper.find('.readings__date').text()
    expect(formatDate(formattedDate)).toContain(formatDate(DATA.publishDate))
    expect(wrapper.find('a').attributes('href')).toBe(DATA.url)
  })

  it('throw an error with missing publishDate', () => {
    const DATA = {
      title: 'Test Title',
      url: 'https://example.com',
      category: 'Test Category',
      publishDate: undefined
    }

    const wrapper = mount(ReadingsItem, { props: DATA })

    const title = wrapper.find('.readings__title').text()
    expect(title).toContain(DATA.title)
    const formattedDate = wrapper.find('.readings__date').text()
    expect(() => formatDate(formattedDate)).toThrowError('Invalid Date')
    expect(wrapper.find('a').attributes('href')).toBe(DATA.url)
  })
})
