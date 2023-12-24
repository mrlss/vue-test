const getCategories = (data = []) => {
  return [...new Set([...data].map((item) => item.category))].filter(Boolean)
}

export default getCategories
