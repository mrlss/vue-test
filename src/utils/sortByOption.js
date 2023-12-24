const sortByOption = (data, type = 'publishDate') => {
  switch (type) {
    case 'publishDate':
      // From newest to latest
      return data.sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    default:
      // If the option is not recognized, return the data as is
      return data
  }
}

export default sortByOption
