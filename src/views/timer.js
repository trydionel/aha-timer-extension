import React from "react";
import ReactDOM from "react-dom";
import { TimerContainer } from "../components/TimerContainer";
import { TimerField } from "../components/TimerField";
import { TimerProvider } from "../data/context";

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
ReactDOM.render(
  <TimerProvider>
    <TimerContainer />
  </TimerProvider>,
  container)

aha.on("timer", ({ record, fields, onUnmounted }, { identifier, settings }) => {
  return (
    <TimerProvider>
      <TimerField record={record} />
    </TimerProvider>
  )
});