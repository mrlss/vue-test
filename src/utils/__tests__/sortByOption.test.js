import { describe, expect, it } from 'vitest'

import { sortByOption } from '@/utils'

describe('sortByOption', () => {
  const inputData = [
    { publishDate: '2023-12-01' },
    { publishDate: '2023-12-03' },
    { publishDate: '2023-12-02' }
  ]

  const sortedData = [
    { publishDate: '2023-12-03' },
    { publishDate: '2023-12-02' },
    { publishDate: '2023-12-01' }
  ]

  it('should sort by publishDate in descending order', () => {
    const result = sortByOption([...inputData], 'publishDate')
    expect(result).toEqual(sortedData)
  })

  it('should return data as is for unknown type', () => {
    const result = sortByOption([...inputData], 'unknownType')
    expect(result).toEqual(inputData)
  })

  it('should return data as is for default type', () => {
    const result = sortByOption([...inputData])
    expect(result).toEqual(sortedData)
  })
})
