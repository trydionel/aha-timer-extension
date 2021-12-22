export const timestampToDuration = (startTime) => {
  const elapsed = (+new Date() - startTime) / 1000 // seconds
  const hours = Math.floor(elapsed / 3600)
  const minutes = Math.floor((elapsed - 3600 * hours) / 60)
  const seconds = Math.floor(elapsed - 3600 * hours - 60 * minutes) % 60

  return {
    hours,
    minutes,
    seconds
  }
}