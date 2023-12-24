import { describe, expect, it } from 'vitest'

import { formatDate } from '@/utils'

describe('formatDate', () => {
  it('should format the date using the provided locale and settings', () => {
    const date = '2023-06-15T12:00:00Z'
    const formattedDate = formatDate(date, 'en-US', { month: 'long', day: 'numeric' })
    expect(formattedDate).toBe('June 15')
  })

  it('should format the date using default locale and settings if not provided', () => {
    const date = '2023-06-15T12:00:00Z'
    const formattedDate = formatDate(date)
    // Assuming the default locale is 'en-US' and default settings are { month: 'long', day: 'numeric' }
    expect(formattedDate).toBe('June 15')
  })

  it('should throw an error if an invalid date is provided', () => {
    const invalidDate = 'invalid-date'
    expect(() => formatDate(invalidDate)).toThrowError('Invalid Date')
  })

  it('should format the date using custom format if specified', () => {
    const date = '2023-06-15T12:00:00Z'
    const formattedDate = formatDate(date, 'en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    })
    expect(formattedDate).toBe('6/15/2023')
  })
})
