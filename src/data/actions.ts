import { state } from "./state";
import { timestampToDuration } from "./util"

const ahaFetch = (path: RequestInfo, options: RequestInit = {}) => {
  const { headers, ...rest } = options;
  const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');

  return fetch(path, {
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      ...headers,
      'x-csrf-token': csrfToken
    },
    ...rest
  });
}

export const loadTimers = async () => {
  const fields = await aha.user.getExtensionFields('trydionel.timer')
  const timers = fields.map(f => ({
    recordId: f.name.replace('timer:', ''),
    startedAt: new Date(f.value)
  }))

  state.timers = timers
}

export const startTimer = async (record) => {
  const now = new Date()

  await aha.user.setExtensionField('trydionel.timer', `timer:${record.id}`, +now)

  // Add new timer
  state.timers.push({
    recordId: record.id,
    startedAt: now
  })
}

export const stopTimer = async (record) => {
  const timer = state.timers.filter(t => t.recordId === record.id)[0]

  await aha.user.clearExtensionField('trydionel.timer', `timer:${record.id}`)
  await logWork(record, timer.startedAt)

  // Remove old timer
  state.timers = state.timers.filter(t => t.recordId !== record.id)
}

export const logWork = async (record, startTime) => {
  const elapsed = timestampToDuration(startTime)
  const workDoneText = `${elapsed.hours}h ${elapsed.minutes}min ${elapsed.seconds}s`
  const data = {
    user_id: aha.user.id,
    work_done_text: workDoneText
  }

  return await ahaFetch(`/api/v1/features/${record.id}/time_tracking_events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}