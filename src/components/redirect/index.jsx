import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function() {
  
  const menus = useSelector(state => state.menu.menus)

  const navigate = useNavigate()

  useEffect(() => {
    if (menus && menus.length) {
      navigate(menus[0].path)
    }
  }, [menus])

  return (<></>)
}
