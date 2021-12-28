import { proxy } from 'valtio'

interface Timer {
  recordId: string;
  startedAt: Date;
}

interface TimerState {
  timers: Timer[]
}

export const state = proxy<TimerState>({
  timers: []
})