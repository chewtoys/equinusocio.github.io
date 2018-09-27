let formatDate = (date) => {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', dateOptions)
}

export default formatDate
