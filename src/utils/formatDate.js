const formatDate = (date, locale = 'en-US', settings = { month: 'long', day: 'numeric' }) => {
  const parsedDate = new Date(date)

  if (isNaN(parsedDate)) {
    throw new Error('Invalid Date')
  }

  const formattedDate = new Date(date).toLocaleDateString(locale, settings)

  return formattedDate
}

export default formatDate
