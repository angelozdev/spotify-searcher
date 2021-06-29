import { useCallback, useEffect, useReducer } from 'react'
import { AxiosError } from 'axios'
import { useRecoilValue } from 'recoil'

import { authAtom } from 'recoilState/auth/atoms'
import { search } from 'services/search'
import { SearchOptions } from 'types'
import { spotifyTypesSelector } from 'recoilState/spotifyTypes/selectors'

import { Data, InitialState } from './types'
import reducer from './reducer'
import initialState from './initialState'
import { getDataFailure, getDataLoading, getDataSuccess } from './actions'

function useSearch(): [
  InitialState,
  (
    options: Omit<SearchOptions, 'token'>,
    callback?: (error: AxiosError | null, data?: Data) => void
  ) => Promise<Data | AxiosError>
] {
  const { accessToken } = useRecoilValue(authAtom)
  const type = useRecoilValue(spotifyTypesSelector)
  const [state, dispatch] = useReducer(reducer, initialState)

  if (!accessToken) {
    throw new Error('[HOOKS] useSearch: Missing token')
  }

  const getData = useCallback(
    async (
      options: Omit<SearchOptions, 'token'>,
      callback?: (error: AxiosError | null, data?: Data) => void
    ): Promise<Data | AxiosError> => {
      dispatch(getDataLoading())
      return search({ ...options, token: accessToken })
        .then((data: Data) => {
          dispatch(getDataSuccess(data))
          callback?.(null, data)
          return data
        })
        .catch((error) => {
          dispatch(getDataFailure(error))
          callback?.(error)
          return Promise.reject(error)
        })
    },
    [accessToken]
  )

  useEffect(() => {
    getData({ query: 'chopin', type, limit: 6 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [state, getData]
}

export default useSearch
