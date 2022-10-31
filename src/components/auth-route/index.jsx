import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

/**
 * 根据菜单获取所有路由path
 * @param {Array} list 菜单数组
 * @returns 
 */
function handleRoutePath(list) {
  let result = []
  list.forEach(item => {
    switch (item.type) {
      case 0:
        break;
      case 4:
        break;
      case 3:
        result.push(`i-${item.menu_id}`)
        break;
      default:
        if (item.url && /\S/u.test(item.url)) {
          result.push(item.path.replace(/^\//, ''))
        }
        break;
    }
    if (item.children) {
      const arr = handleRoutePath(item.children)
      result = [...result, ...arr]
    }
  })
  return result
}

export default function(props) {
  const { path, element } = props

  const [hasPermission, setHasPermission] = useState(false)
  
  const menus = useSelector(state => state.menu.menus)

  useEffect(() => {
    const paths = handleRoutePath(menus)
    setHasPermission(paths.includes(path))
  }, [menus])

  return (<>
    { hasPermission ? element : '' }
  </>)
}
