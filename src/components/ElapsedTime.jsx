import React, { useEffect, useState } from 'react'
import { timestampToDuration } from '../data/util'

export const ElapsedTime = ({ startTime }) => {
  const [formatted, setFormatted] = useState('')

  const refresh = () => {
    const elapsed = timestampToDuration(startTime)

    let formatted = ''
    if (elapsed.hours > 0) {
      formatted = formatted + elapsed.hours.toString() + ':'
    }
    formatted = formatted + `${elapsed.minutes.toString().padStart(2, '0')}:${elapsed.seconds.toString().padStart(2, '0')}`

    setFormatted(formatted)
  }

  useEffect(() => {
    refresh()

    const interval = setInterval(refresh, 1000)
    return () => clearInterval(interval)
  }, []);

  return <>
    <i className="fa far fa-clock mr-1" />
    {formatted}
  </>
}