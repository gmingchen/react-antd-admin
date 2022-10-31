import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'

import Init from '@/containers/init'
import Sidebar from './components/sidebar'
import Active from './components/navigation/active'
import Fixed from './components/navigation/fixed'
import Headbar from './components/headbar'
import Tabsbar from './components/tabsbar'
import RouterAsync from '@/containers/router-async'

export default function() {
  return (
    <Init>
      <div className='layout-container flex-item_f-1 flex-box'>
        <Sidebar />
        <Fixed>
          <Headbar slot="headbar" />
          <Tabsbar slot="tabsbar" />
          <Outlet />
        </Fixed>
      </div>
    </Init>
  )
}
