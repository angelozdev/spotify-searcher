function objectToParams(object: Object) {
  const entries = Object.entries(object)
  const params = entries
    .map(([key, value]) => {
      if (value === null || value === undefined) return ''
      const encodedKey = encodeURIComponent(key)
      const encodedValue = encodeURIComponent(value)

      return `${encodedKey}=${encodedValue}`
    })
    .join('&')

  return params
}

export default objectToParams
