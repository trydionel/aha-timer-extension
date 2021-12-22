export const bus = {
  on(event, callback) {
    document.addEventListener(event, e => callback(e))
  },

  off(event, callback) {
    document.removeEventListener(event, callback)
  },

  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }))
  }
}
