function formatNumber(
  number: number | string,
  options?: Intl.NumberFormatOptions
) {
  if (typeof number === 'string') {
    number = Number(number)
  }

  const formatedNumber = new Intl.NumberFormat('es-CO', options).format(number)

  return formatedNumber
}

export default formatNumber
