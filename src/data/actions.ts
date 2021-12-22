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