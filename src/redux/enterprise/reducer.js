import { UPDATE_ENTERPRISE } from '../constant'

const initState = {
  id: '',
  name: '',
  logo: ''
}

export default function (state = initState, action) {
  const { type, data } = action
  switch (type) {
    case UPDATE_ENTERPRISE:
      return {...data}
    default:
      return state
  }
} 