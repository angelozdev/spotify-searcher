import { AxiosError } from 'axios'
import { ActionTypes } from './consts'
import { Action, Data } from './types'

const { GET_DATA_FAILURE, GET_DATA_LOADING, GET_DATA_SUCCESS } = ActionTypes

export const getDataLoading = (): Action<void> => ({
  type: GET_DATA_LOADING
})

export const getDataFailure = (error: AxiosError): Action<AxiosError> => ({
  type: GET_DATA_FAILURE,
  payload: error
})

export const getDataSuccess = (data: Data): Action<Data> => ({
  type: GET_DATA_SUCCESS,
  payload: data
})
