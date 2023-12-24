import { describe, expect, it } from 'vitest'

import { filterByExpirationDay } from '@/utils'

function createDateWithOffset(offset = 0) {
  if (typeof offset !== 'number') {
    throw new Error('Offset must be a number')
  }

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + offset)

  const day = currentDate.getDate().toString().padStart(2, '0')
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const year = currentDate.getFullYear()

  return `${year}-${month}-${day}`
}

describe('filterByExpirationDay', () => {
  const inputData = [
    { publishDate: createDateWithOffset() },
    { publishDate: createDateWithOffset(1) },
    { publishDate: createDateWithOffset(2) },
    { publishDate: createDateWithOffset(-6) },
    { publishDate: createDateWithOffset(-2) },
    { publishDate: createDateWithOffset(-4) }
  ]

  it('should filter articles older than 7 days by default', () => {
    const result = filterByExpirationDay(inputData)
    expect(result).toEqual([
      { publishDate: createDateWithOffset() },
      { publishDate: createDateWithOffset(1) },
      { publishDate: createDateWithOffset(2) },
      { publishDate: createDateWithOffset(-6) },
      { publishDate: createDateWithOffset(-2) },
      { publishDate: createDateWithOffset(-4) }
    ])
  })

  it('should filter articles older than specified days', () => {
    const result = filterByExpirationDay(inputData, 2)
    expect(result).toEqual([
      { publishDate: createDateWithOffset() },
      { publishDate: createDateWithOffset(1) },
      { publishDate: createDateWithOffset(2) }
    ])
  })

  it('should not filter any articles if all are within the specified days', () => {
    const result = filterByExpirationDay(inputData, 10)
    expect(result).toEqual(inputData)
  })

  it('should not filter any articles if articles array is empty', () => {
    const result = filterByExpirationDay([], 7)
    expect(result).toEqual([])
  })

  it('should throw an error if specified days is not type of Number', () => {
    expect(() => filterByExpirationDay(inputData, 'invalid')).toThrowError(
      'Second parameter must be a number'
    )
  })
})
