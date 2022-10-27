import {
  UPDATE_ADMINISTRATOR, REMOVE_ADMINISTRATOR,
  UPDATE_TOKEN, REMOVE_TOKEN
} from '../constant'

import { loginApi } from '@/api/login'
import { selfInfoApi } from '@/api/administrator'

import { clearToken, setToken } from '@/utils/storage'

export const updateAdministrator = data => ({ type: UPDATE_ADMINISTRATOR, data })

export const removeAdministrator = () => ({ type: REMOVE_ADMINISTRATOR })

export const updateToken = data => ({ type: UPDATE_TOKEN, data })

export const removeToken = () => ({ type: REMOVE_TOKEN })

export const loginAsync = data => {
  return async (dispatch) => {
    const r = await loginApi(data)
    if (r) {
      setToken(JSON.stringify(r.data))
      dispatch(updateToken(r.data))
    }
    return r
  }
}

export const getAdministratorAsync = () => {
  return async (dispatch) => {
    const r = await selfInfoApi()
    if (r) {
      dispatch(updateAdministrator(r.data))
    }
  }
}
