import {
  UPDATE_ADMINISTRATOR, REMOVE_ADMINISTRATOR,
  UPDATE_TOKEN, REMOVE_TOKEN
} from '../constant'

import { getToken } from '@/utils/storage'

const initState = {
  administrator: {
    id: '',
    username: '',
    nickname: '',
    avatar: '',
    mobile: '',
    email: '',
    status: '',
    roles: [],
    supervisor: '',
    enterprise_id: ''
  },
  token: getToken()
}

export default function (state = initState, action) {
  const { type, data } = action
  switch (type) {
    case UPDATE_ADMINISTRATOR:
      return {
        ...state, 
        administrator: data
      }
    case REMOVE_ADMINISTRATOR:
      return {
        ...state,
        administrator: {}
      }
    case UPDATE_TOKEN:
      return {
        ...state, 
        token: data
      }
    case REMOVE_TOKEN:
      return {
        ...state, 
        token: {}
      }
    default:
      return state
  }
} 