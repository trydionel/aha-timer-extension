import React from "react";
import ReactDOM from "react-dom";
import { TimerContainer } from "../components/TimerContainer";
import { TimerField } from "../components/TimerField";
import { loadTimers } from "../data/actions";
import { state } from "../data/state";

let container = document.querySelector('#timer')
if (container) {
  console.log('[Timer] Unmounting existing component')
  ReactDOM.unmountComponentAtNode(container)
} else {
  console.log('[Timer] Creating root element')
  container = document.createElement('div')
  container.id = 'timer'
  document.body.appendChild(container)
}
console.log('[Timer] Mounting component')
ReactDOM.render(<TimerContainer state={state} />, container)

aha.on("timer", ({ record, fields, onUnmounted }, { identifier, settings }) => {
  return (
    <TimerField state={state} record={record} />
  )
});

loadTimers()
setInterval(loadTimers, 60 * 1000) // refresh timers regularly to support people using multiple tabs