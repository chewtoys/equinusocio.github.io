let formatDate = (date, options) => {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', options || dateOptions)
}

export default formatDate
