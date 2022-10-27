import {
  UPDATE_GET, UPDATE_ACTIVE, UPDATE_COLLAPSE,
  UPDATE_MENU, UPDATE_PERMISSION,
} from '../constant'

import { selfInfoApi } from '@/api/enterprise-menu'

import { setGet, setMenuAndPermission } from '@/utils/storage'

export const updateGet = data => ({ type: UPDATE_GET, data })

export const updateActive = data => ({ type: UPDATE_ACTIVE, data })

export const updateCollapse = data => ({ type: UPDATE_COLLAPSE, data })

export const updateMenu = data => ({ type: UPDATE_MENU, data })

export const updatePermission = data => ({ type: UPDATE_PERMISSION, data })

export const getMenuAndPermissionAsync = () => {
  return async (dispatch) => {
    dispatch(updateGet(true))
    const r = await selfInfoApi()
    if (r) {
      setGet(true)
      setMenuAndPermission(r.data)
      dispatch(updateMenu(r.data.menus))
      dispatch(updatePermission(r.data.permissions))
    } else {
      setGet(false)
      dispatch(updateGet(false))
    }
    console.log('获取到菜单')
    return r
  }
}