import { describe, expect, it } from 'vitest'

import { getCategories } from '@/utils'

describe('getCategories', () => {
  it('should extract unique categories from an array of objects', () => {
    const data = [
      { category: 'News' },
      { category: 'Fashion' },
      { category: 'News' },
      { category: 'Food' },
      { category: 'Food' },
      { category: 'Articles' }
    ]

    const result = getCategories(data)

    // Expecting unique categories in alphabetical order
    expect(result).toEqual(['News', 'Fashion', 'Food', 'Articles'])
  })

  it('should handle an empty array and return an empty array', () => {
    const result = getCategories([])
    expect(result).toEqual([])
  })

  it('should handle an array with objects missing the category field', () => {
    const data = [
      { category: 'Tech' },
      { notCategory: 'Fashion' },
      { category: 'Food' },
      { category: 'Travel' }
    ]

    const result = getCategories(data)

    // Expecting unique categories in alphabetical order, ignoring objects without the category field
    expect(result).toEqual(['Tech', 'Food', 'Travel'])
  })
})
