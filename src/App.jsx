import { Suspense } from 'react'
import { Provider } from 'react-redux'

import Router from '@/containers/router'
import store from '@/redux'

import '@/assets/sass/index.scss'
import '@/assets/less/index.less'

export default function App() {
  return (
    <Suspense>
      <Provider store={ store }>
        <Router />
      </Provider>
    </Suspense>
  )
}
