function formatDate(stringDate: string, options?: Intl.DateTimeFormatOptions) {
  const stringToDate = new Date(stringDate);

  const formatedDate = new Intl.DateTimeFormat("ES-es", options).format(
    stringToDate
  );

  return formatedDate;
}

export default formatDate;
