import React from 'react'
import { connect } from 'react-redux'

import { updateCollapse } from '@/redux/menu/action'

import { Tooltip } from 'antd'

import Iconfont from '@/components/iconfont'

function SidebarMenuCollapse(props) {
  const { collapse, updateCollapse } = props

  const handleClick = () => {
    updateCollapse(!collapse)
  }

  return (
    <Tooltip 
      placement="bottom" 
      title="折叠/展开菜单"
      mouseEnterDelay={ 0.5 }
      mouseLeaveDelay={ 0 }>
        <Iconfont
          className="cursor-pointer margin_r-20"
          name={ `collapse-${collapse ? 'right' : 'left'}` }
          onClick={ handleClick } />
    </Tooltip>
  )
}

export default connect(
  state => ({
    collapse: state.menu.collapse
  }),
  {
    updateCollapse: updateCollapse
  }
)(SidebarMenuCollapse)
