import { useCallback, useEffect, useReducer } from "react";
import { useRecoilValue } from "recoil";
import { AxiosError } from "axios";

import { authAtom } from "recoilState/auth/atoms";
import { search } from "services/search";
import { Artists, SearchOptions, Statuses, Tracks } from "types";

interface InitialState {
  data: {
    artists?: Artists;
    tracks?: Tracks;
  } | null;
  error: AxiosError | null;
  status: Statuses;
}

interface Action<T = any> {
  type: string;
  payload?: T;
}

const initialState: InitialState = {
  data: null,
  error: null,
  status: "IDLE",
};

const ActionTypes = {
  GET_DATA_LOADING: "[SEARCH] Getting data",
  GET_DATA_FAILURE: "[SEARCH] Error on getting data",
  GET_DATA_SUCCESS: "[SEARCH] Got data successfully",
};

function reducer(
  state: InitialState = initialState,
  actions: Action
): InitialState {
  const { type, payload } = actions;
  switch (type) {
    case ActionTypes.GET_DATA_LOADING:
      return {
        ...state,
        status: "LOADING",
      };
    case ActionTypes.GET_DATA_FAILURE:
      return {
        ...state,
        status: "FAILURE",
        error: payload,
      };

    case ActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        status: "SUCCESS",
        error: null,
      };
    default:
      throw new Error("[HOOKS] useSearch: type invalid");
  }
}

function useSearch(): [
  InitialState,
  (options: Omit<SearchOptions, "token">) => void
] {
  const { accessToken } = useRecoilValue(authAtom);
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!accessToken) {
    throw new Error("[HOOKS] useSearch: Missing token");
  }

  const getData = useCallback((options: Omit<SearchOptions, "token">) => {
    dispatch({ type: ActionTypes.GET_DATA_LOADING });

    search({ ...options, token: accessToken })
      .then((data) => {
        dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.GET_DATA_FAILURE, payload: error });
      });
  }, []);

  return [state, getData];
}

export default useSearch;
