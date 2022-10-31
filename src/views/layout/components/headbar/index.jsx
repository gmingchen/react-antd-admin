import React from 'react'

import SidebarMenuCollapse from '@/containers/sidebar-menu-collapse'
import Action from './components/action'

import './index.scss'

export default function() {
  return (
    <div className='headbar-container box-shadow padding-n-10 flex-box flex_w-wrap flex_a_i-center'>
      <SidebarMenuCollapse />
      <Action />
    </div>
  )
}
