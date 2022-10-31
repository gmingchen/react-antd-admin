import { useEffect } from 'react'
import {connect } from 'react-redux'

import Slot from '@/components/slot'

import { getAdministratorAsync } from '@/redux/administrator/action'
import { getMenuAndPermissionAsync } from '@/redux/menu/action'
import { getEnterpriseAsync } from '@/redux/enterprise/action'

function Init(props) {
  const { getAdministrator, getMenuAndPermission, isGet, getEnterprise } = props

  useEffect(() => {
    getAdministrator()
    getEnterprise()
    // if (!isGet) {
    //   getMenuAndPermission()
    // }
  }, [])
  
  return (
    <Slot props={props} />
  )
}

export default connect(
  state => ({
    isGet: state.menu.get,
  }),
  {
    getAdministrator: getAdministratorAsync,
    getMenuAndPermission: getMenuAndPermissionAsync,
    getEnterprise: getEnterpriseAsync
  }
)(Init)
