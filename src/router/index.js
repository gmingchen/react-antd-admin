import { lazy } from 'react'
import { Navigate} from 'react-router-dom'

import Redirect from '@/components/redirect'
import AuthRoute from '@/components/auth-route'

const lazyLoad = (path) => {
  const Element = lazy(() => import(`@/views${path}`))
  return <Element />
}

const moduleLoad = (path) => {
  path = `/modules${ path }`
  return lazyLoad(path)
}

const constant = [
  { path: '/login', element: lazyLoad('/constant/login') },
  { path: '/401', element: lazyLoad('/constant/401') },
  { path: '/404', element: lazyLoad('/constant/404') },
  { path: '/500', element: lazyLoad('/constant/500') },
  { path: '/', element: <Navigate to='/login' replace /> },
]

const main = {
  name: 'main',
  path: '/',
  element: lazyLoad('/layout'),
  children: [
    { path: 'redirect', element: <Redirect/> },
    { path: 'home', element: <AuthRoute path='home' element={ moduleLoad('/home') } /> },
    { path: 'message/websocket/record', element: <AuthRoute path='message/websocket/record' element={ moduleLoad('/message/websocket/record') } />},
    { path: 'message/mail/template', element: <AuthRoute path='message/mail/template' element={ moduleLoad('/message/mail/template') } />},
    { path: 'message/mail/record', element: <AuthRoute path='message/mail/record' element={ moduleLoad('/message/mail/record') } />},
    { path: 'enterprise/list', element: <AuthRoute path='enterprise/list' element={ moduleLoad('/enterprise/list') } />},
    { path: 'enterprise/role', element: <AuthRoute path='enterprise/role' element={ moduleLoad('/enterprise/role') } />},
    { path: 'enterprise/administrator', element: <AuthRoute path='enterprise/administrator' element={ moduleLoad('/enterprise/administrator') } />},
    { path: 'enterprise/menu', element: <AuthRoute path='enterprise/menu' element={ moduleLoad('/enterprise/menu') } />},
    { path: 'role', element: <AuthRoute path='role' element={ moduleLoad('/system/role') } />},
    { path: 'administrator', element: <AuthRoute path='administrator' element={ moduleLoad('/system/administrator') } />},
    { path: 'menu', element: <AuthRoute path='menu' element={ moduleLoad('/home') } />},
    { path: 'system/department', element: <AuthRoute path='system/department' element={ moduleLoad('/home') } />},
    { path: 'log/login', element: <AuthRoute path='log/login' element={ moduleLoad('/home') } />},
    { path: 'log/operation', element: <AuthRoute path='log/operation' element={ moduleLoad('/home') } />},
    { path: 'data/dictionary', element: <AuthRoute path='data/dictionary' element={ moduleLoad('/home') } />},
    { path: 'data/configuration', element: <AuthRoute path='data/configuration' element={ moduleLoad('/home') } />},
    { path: 'data/file', element: <AuthRoute path='data/file' element={ moduleLoad('/home') } />},
    { path: 'data/backup', element: <AuthRoute path='data/backup' element={ moduleLoad('/home') } />},
    { path: 'data/region', element: <AuthRoute path='data/region' element={ moduleLoad('/home') } />},
    { path: 'monitoring/online', element: <AuthRoute path='monitoring/online' element={ moduleLoad('/home') } />},
    { path: 'monitoring/log/login', element: <AuthRoute path='monitoring/log/login' element={ moduleLoad('/home') } />},
    { path: 'monitoring/log/operation', element: <AuthRoute path='monitoring/log/operation' element={ moduleLoad('/home') } />},
    { path: 'monitoring/log/error', element: <AuthRoute path='monitoring/log/error' element={ moduleLoad('/home') } />},
    { path: 'monitoring/log/task', element: <AuthRoute path='monitoring/log/task' element={ moduleLoad('/home') } />},
    { path: 'develop/menu', element: <AuthRoute path='develop/menu' element={ moduleLoad('/home') } />},
    { path: 'develop/task/index', element: <AuthRoute path='develop/task/index' element={ moduleLoad('/home') } />},
    { path: 'develop/generator', element: <AuthRoute path='develop/generator' element={ moduleLoad('/home') } />},
    { path: 'i-128', element: <AuthRoute path='i-128' element={ moduleLoad(`/iframe`) } />},
    { path: 'personal', element: <AuthRoute path='personal' element={ moduleLoad('/personal') } />},
    { path: 'i-140', element: <AuthRoute path='i-140' element={ moduleLoad(`/iframe`) } />}
  ]
}

const routes = constant.concat(main).concat([{ path: '/*', element: <Navigate to='/404' replace /> }])

export default routes