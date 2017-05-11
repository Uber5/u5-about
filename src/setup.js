
const installErrorListener = w => {

  w.addEventListener('error', function(e) {
    const errors = JSON.parse(w.localStorage.getItem('u5-errors') || '[]')
    while (errors.length > 10) {
      errors.splice(0, 1)
    }
    errors.push({
      at: new Date().getTime(),
      stack: e.error && e.error.stack,
      message: e.toString(),
      location: window.location.toString()
    })
    w.localStorage.setItem('u5-errors', JSON.stringify(errors))
  })
}

if (window && window.localStorage) {
  installErrorListener(window)
} else {
  console.log('u5-about, no "window" global found, or no localStorage. Oops.')
}
