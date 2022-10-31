import { useEffect, lazy, useState } from 'react'
import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import routes from '@/router'

import { getMenuAndPermissionAsync } from '@/redux/menu/action'

/**
 * 路由懒加载
 * @param {String} path 组件路径 
 * @returns 
 */
const lazyLoad = (path) => {
  const Element = lazy(() => import(`@/views/modules${path}`))
  return <Element />
}

/**
 * 根据菜单封装路由
 * @param {Array} list 菜单数组
 * @returns 
 */
function handleRoutes(list) {
  let result = []
  list.forEach(item => {
    let route = null
    switch (item.type) {
      case 0:
        break;
      case 4:
        break;
      case 3:
        route = {
          path: `/i-${item.menu_id}`,
          element: lazyLoad(`/iframe`)
        }
        break;
      default:
        if (item.url && /\S/u.test(item.url)) {
          route = {
            path: item.path,
            element: lazyLoad(`/${ item.url }`)
          }
        }
        break;
    }
    if (route) {
      result.push(route)
    }
    if (item.children) {
      const arr = handleRoutes(item.children)
      result = [...result, ...arr]
    }
  })
  return result
}


function Router(props) {
  const { menus } = props

  const [list, setList] = useState([])

  /**
   * 注册路由
   */
  const handleRegisterRoutes = () => {
    const routesAsync = handleRoutes(menus)
    const index = routes.length - 1
    const route = routes[index]
    const { children } = route
    result = [...children, ...routesAsync]
    setList(result)
    console.log('************************************', menus.length)
  }

  useEffect(() => {
    handleRegisterRoutes()
  }, [menus])

  return (
    <>
      <div>123</div>
      {list.map(route => {
        return <Route {...route} key={route.path || index} exact></Route>
      })}
    </>
  )
}

export default connect(
  state => ({
    isGet: state.menu.get,
    menus: state.menu.menus,
  }),
  {
    getMenuAndPermission: getMenuAndPermissionAsync,
  }
)(Router)
