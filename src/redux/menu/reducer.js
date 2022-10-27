import {
  UPDATE_GET, UPDATE_ACTIVE, UPDATE_COLLAPSE,
  UPDATE_MENU, UPDATE_PERMISSION,
} from '../constant'

import { MENU_KEY, PERMISSION_KEY } from '@/utils/constant'

import { getGet, getMenuAndPermission } from '@/utils/storage'

// 初始化菜单 权限 数据
const data = getMenuAndPermission()

const initState = {
  get: getGet(),
  menus: data[MENU_KEY],
  permissions: data[PERMISSION_KEY],
  active: ['124', '123', '112'],
  collapse: false
}

export default function (state = initState, action) {
  const { type, data } = action
  switch (type) {
    case UPDATE_GET:
      return {
        ...state, 
        get: data
      }
    case UPDATE_ACTIVE:
      return {
        ...state, 
        active: data
      }
    case UPDATE_COLLAPSE:
      return {
        ...state, 
        collapse: data
      }
    case UPDATE_MENU:
      return {
        ...state, 
        menus: data
      }
    case UPDATE_PERMISSION:
      return {
        ...state, 
        permissions: data
      }
    default:
      return state
  }
} 