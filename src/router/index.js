import { lazy } from 'react'

const lazyLoad = (path) => {
  const Element = lazy(() => import(`@/views${path}`))
  return <Element />
}

const constant = [
  { path: '/login', element: lazyLoad('/constant/login') },
  { path: '/401', element: lazyLoad('/constant/401') },
  { path: '/404', element: lazyLoad('/constant/404') },
  { path: '/500', element: lazyLoad('/constant/500') }
]

const main = {
  element: lazyLoad('/layout'),
  children: [
    { path: '/home', element: lazyLoad('/modules/home') },
  ]
}

const routes = constant.concat(main)

export default routes