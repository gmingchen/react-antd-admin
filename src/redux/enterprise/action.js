import { UPDATE_ENTERPRISE } from '../constant'

import { selfInfoApi } from '@/api/enterprise'


export const updateEnterprise = data => ({ type: UPDATE_ENTERPRISE, data })

export const getEnterpriseAsync = (data) => {
  return async (dispatch) => {
    if (data) return
    const r = await selfInfoApi()
    if (r) {
      dispatch(updateEnterprise(r.data))
    }
    return r
  }
}