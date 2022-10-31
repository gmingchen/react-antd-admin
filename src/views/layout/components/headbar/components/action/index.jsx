import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { Dropdown, Menu, Avatar } from 'antd'

export default function() {
  const { nickname, username, avatar } = useSelector(state => state.administrator.administrator)
  const navigate = useNavigate()

  const handleDropdown = ({ key }) => {
    switch (+key) {
      case 1:
        navigate('/personal')
        break;
      case 2:
        
        break;
    }
  }

  const menu = (
    <Menu 
      items={[
        { key: 1, label: <span>个人中心</span> },
        { key: 2, label: <span>退出登录</span> }
      ]} 
      onClick={ handleDropdown }/>
    )

  return (
    <div className='flex-item_f-1 flex-box flex_j_c-flex-end flex_a_i-center'>
      <Dropdown overlay={ menu }>
        <Avatar src={ avatar }>
          { nickname || username }
        </Avatar>
      </Dropdown>
    </div>
  )
}
