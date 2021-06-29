import { AxiosError } from 'axios'
import { Albums, Artists, Statuses, Tracks } from 'types'

export type Data = {
  artists?: Artists
  tracks?: Tracks
  albums?: Albums
} | null

export interface InitialState {
  data: Data
  error: AxiosError | null
  status: Statuses
}

export interface Action<T = any> {
  type: string
  payload?: T
}
