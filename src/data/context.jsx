import React, { useEffect, useState } from 'react'
import { logWork } from './actions'

export const TimerContext = React.createContext({
  timers: [],
  startTimer: (record) => {},
  stopTimer: (record) => {}
})

// FIXME:
// Each component tree is getting a unique state object.  How do I best share
// state across component trees?
// 
// Alternatively, how can I subscribe to updates to user extension data?

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([])

  const loadTimers = async () => {
    console.log('[Timer] Reloading timer data')

    const fields = await aha.user.getExtensionFields('trydionel.timer')
    const timers = fields.map(f => ({
      recordId: f.name.replace('timer:', ''),
      startedAt: f.value
    }))
    setTimers(timers)
  }

  const startTimer = async (record) => {
    await aha.user.setExtensionField('trydionel.timer', `timer:${record.id}`, +new Date())
    await loadTimers()
  }
  const stopTimer = async (record) => {
    const timer = timers.filter(t => t.recordId === record.id)[0]

    await aha.user.clearExtensionField('trydionel.timer', `timer:${record.id}`)
    await loadTimers()
    await logWork(record, timer.startedAt)
  }

  const value = {
    timers,
    startTimer,
    stopTimer
  }

  useEffect(() => {
    loadTimers();

    const pid = setInterval(loadTimers, 60 * 1000);
    () => { clearInterval(pid) }
  }, [])

  return (
    <TimerContext.Provider value={value}>
      { children }
    </TimerContext.Provider>
  )
}

export const useTimerContext = () => {
  return React.useContext(TimerContext)
}