import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

import '@/assets/sass/index.scss'
import '@/assets/less/index.less'

export default function App() {
  const elements = useRoutes(routes)
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      { elements }
    </Suspense>
  );
}
