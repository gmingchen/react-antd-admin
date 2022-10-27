import { Card } from 'antd'

import LoginForm from '@/containers/login-form'

export default function() {
  return (
    <div className='flex-item_f-1 flex-box flex_a_i-center flex_j_c-center'>
      <Card className='card box-shadow width-500' bodyStyle={{ padding: '20px' }}>
        <LoginForm />
      </Card>
    </div>
  )
}
