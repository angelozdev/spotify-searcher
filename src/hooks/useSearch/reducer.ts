import initialState from './initialState'
import { ActionTypes } from './consts'
import { Action, InitialState } from './types'

function reducer(
  state: InitialState = initialState,
  actions: Action
): InitialState {
  const { type, payload } = actions
  switch (type) {
    case ActionTypes.GET_DATA_LOADING:
      return {
        ...state,
        status: 'LOADING'
      }
    case ActionTypes.GET_DATA_FAILURE:
      return {
        ...state,
        status: 'FAILURE',
        error: payload
      }

    case ActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        status: 'SUCCESS',
        error: null
      }
    default:
      throw new Error('[HOOKS] useSearch: type invalid')
  }
}

export default reducer
