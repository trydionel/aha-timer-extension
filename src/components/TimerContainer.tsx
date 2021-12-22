/** @jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/react'
import { Timer } from "../components/Timer";
import { useTimerContext } from "../data/context";

const HorizontalRow = ({ children }) => (
  <div css={css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;

    display: grid;
    grid-gap: 10px;
    grid-auto-columns: 200px;
    grid-template-rows: 60px;
    grid-auto-flow: column;

    margin: 16px;
  `}>
    {children}
  </div>
)

export const TimerContainer = () => {
  const { timers } = useTimerContext()

  return (
    <HorizontalRow>
      {
        timers.map(timer => {
          return <Timer record={timer.recordId} startTime={timer.startedAt} />
        })
      }
    </HorizontalRow>
  )
}