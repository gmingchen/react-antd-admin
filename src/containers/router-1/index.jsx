import { useEffect, lazy, useState } from 'react'
import { connect } from 'react-redux'
import { Routes, Route, useRoutes, useLocation } from 'react-router-dom'
import routes from '@/router'

import { getMenuAndPermissionAsync } from '@/redux/menu/action'

/**
 * 获取路由
 * @param {*} path 路由路径
 * @param {*} routes 静态路由数组
 * @returns 
 */
function handleRouteType(path, routes) {
  return routes.some(route => route.path === path ) ? 'staic' : 'dynamic'
}

function Router(props) {
  const { isGet, getMenuAndPermission } = props

  const { pathname } = useLocation()

  /**
   * 判断是否获取异步路由
   */
  const handleAsyncRoutes = async () => {
    const type = handleRouteType(pathname, routes)
    if (type === 'dynamic' && !isGet) {
      await getMenuAndPermission()
    }
  }

  handleAsyncRoutes()

  console.log('---------', routes)

  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route path={route.path} element={route.element} key={route.path || index} />
      })}
    </Routes>
  )
}

export default connect(
  state => ({
    isGet: state.menu.get,
  }),
  {
    getMenuAndPermission: getMenuAndPermissionAsync,
  }
)(Router)
