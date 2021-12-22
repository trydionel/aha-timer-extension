import React from "react"
import { useTimerContext } from "../data/context"
import { ElapsedTime } from "./ElapsedTime"

export const TimerField = ({ record }) => {
  const { timers, startTimer, stopTimer } = useTimerContext()
  const timer = timers.filter(t => t.recordId === record.id)[0]
  const hasTimer = !!timer

  console.log('[Timer] Rendering timer field')

  return (
    <>
      {
        hasTimer ?
          <div key="stop">
            <ElapsedTime startTime={timer.startedAt} />
            &nbsp;
            <aha-button onClick={e => stopTimer(record)}>
              Stop timer
            </aha-button>
          </div> :
          <div key="start">
            <aha-button onClick={e => startTimer(record)}>
              Start timer
            </aha-button>
          </div>
      }
    </>
  )
}