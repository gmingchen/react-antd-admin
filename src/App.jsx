import { Suspense } from 'react'
import { Provider } from 'react-redux'

import store from '@/redux'

import Router from '@/containers/router'

import '@/assets/sass/index.scss'
import '@/assets/less/index.less'

export default function App() {
  return (
    <Suspense>
      <Provider store={ store }>
        <Router></Router>
      </Provider>
    </Suspense>
  )
}
