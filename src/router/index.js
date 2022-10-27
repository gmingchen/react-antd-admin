import { lazy } from 'react'
import { Navigate} from 'react-router-dom'

const lazyLoad = (path) => {
  const Element = lazy(() => import(`@/views${path}`))
  return <Element />
}

const constant = [
  { path: '/login', element: lazyLoad('/constant/login') },
  { path: '/401', element: lazyLoad('/constant/401') },
  { path: '/404', element: lazyLoad('/constant/404') },
  { path: '/500', element: lazyLoad('/constant/500') },
  { path: '/', element: <Navigate to='/login' replace /> },
]

const main = {
  element: lazyLoad('/layout'),
  children: [
  ]
}

const routes = constant.concat(main)

export default routes