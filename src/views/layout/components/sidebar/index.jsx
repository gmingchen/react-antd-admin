import SidebarMenu from '@/containers/sidebar-menu'

import Logo from './components/logo'

export default function() {
  return (
    <div className='sidebar-container flex-box flex_d-column'>
      <Logo />
      <div className='flex-item_f-1 overflow-auto'>
        <SidebarMenu />
      </div>
    </div>
  )
}
