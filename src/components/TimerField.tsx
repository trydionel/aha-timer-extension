import React from "react"
import { useSnapshot } from "valtio"
import { startTimer, stopTimer } from "../data/actions"
import { ElapsedTime } from "./ElapsedTime"

export const TimerField = ({ state, record }) => {
  const { timers } = useSnapshot(state)
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