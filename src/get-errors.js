export default (w = window) => {
  if (w && w.localStorage) {
    return JSON.parse(w.localStorage.getItem('u5-errors')) || []
  } else {
    throw new Error('"localStorage" not available, no recorded errors available.')
  }
}
