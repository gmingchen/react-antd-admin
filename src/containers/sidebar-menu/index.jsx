import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateActive } from '@/redux/menu/action'

import { Menu } from 'antd'
import Iconfont from '@/components/iconfont'

import './index.scss'

function handleMenuTree(list = []) {
  const result = []
  list.forEach(item => {
    if (item.type !== 2 && item.show === 1) {
      const menu = {
        key: item.menu_id,
        label: item.name_cn,
        icon: <Iconfont name={ item.icon }></Iconfont>
      }
      if (item.children && item.children.length > 0) {
        menu.children = handleMenuTree(item.children)
        !menu.children.length && delete menu.children
      }
      result.push(menu)
    }
  })
  return result
}

function SidebarMenu(props) {
  const { active, menus, collapse, updateActive } = props

  const navigate = useNavigate()

  const [list, setList] = useState([])

  useEffect(() => {
    setList(handleMenuTree(menus))
  }, [])

  const handleClick = ({ keyPath }) => {
    const length = keyPath.length
    if (length) {
      let menu = null
      for (let i = length - 1; i >= 0; i--) {
        const key = +keyPath[i];
        let sources = menu ? menu.children : menus
        menu = sources.find(item => item.menu_id === key)
      }
      const { menu_id, type, url, path } = menu
      switch (type) {
        case 4: // 外链
          window.open(url)
          break
        case 1: // 菜单
          navigate(path)
          break
        case 3: // iframe
          navigate(`/i-${ menu_id }?url=${ url }`)
          break
      }
    }
    updateActive(keyPath)
  }

  return (
    <Menu
      // defaultOpenKeys={ active }
      defaultSelectedKeys={ active }
      selectedKeys={ active }
      className='sidebar-menu-container'
      inlineCollapsed={ collapse }
      mode="inline"
      items={ list }
      onClick={ handleClick } />
  )
}

export default connect(
  state => ({
    active: state.menu.active,
    menus: state.menu.menus,
    collapse: state.menu.collapse
  }),
  {
    updateActive: updateActive
  }
)(SidebarMenu)
