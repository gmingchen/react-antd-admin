import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginAsync } from '@/redux/administrator/action'

import { Button, Form, Input, Spin } from 'antd'
import Iconfont from '@/components/iconfont'

import { generateUUID } from '@/utils'

import { captchaApi } from '@/api/login'

function LoginForm(props) {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [uuid, setUuid] = useState('')

  const [form] = Form.useForm()
  const [username, password, code] = [
    [{ required: true, message: '账户不能为空' }],
    [{ required: true, message: '密码不能为空' }],
    [{ required: true, message: '验证码不能为空' }]
  ]

  const getCaptcha = () => {
    const value = generateUUID()
    setUuid(value)
    setCaptcha(captchaApi({ uuid: value }))
  }

  const handleSubmit = () => {
    form.validateFields().then(async values => {
      setLoading(true)
      const params = {
        ...values,
        uuid
      }
      const r = await props.login(params)
      if (r) {
        navigate('/home')
      }
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    getCaptcha()
  }, [])

  return (
    <Form form={ form }>
      <Form.Item name='username' rules={ username }>
        <Input prefix={ <Iconfont name='user' /> }  />
      </Form.Item>
      <Form.Item name='password' rules={ password }>
        <Input type="password" prefix={ <Iconfont name='lock' /> } />
      </Form.Item>
      <Form.Item name='code' rules={ code }>
        <div className='flex-box'>
          <Input prefix={ <Iconfont name='verification' /> } className="flex-item_f-1" />
          <img
            className="height-32 cursor-pointer"
            src={ captcha }
            onClick={ getCaptcha }
            alt="验证码" />
        </div>
      </Form.Item>
      <Spin spinning={ loading }>
        <Button type='primary' className='width-full' onClick={ handleSubmit }>登录</Button>
      </Spin>
    </Form>
  )
}

export default connect(
  _state => ({}),
  {
    login: loginAsync
  }
)(LoginForm)

