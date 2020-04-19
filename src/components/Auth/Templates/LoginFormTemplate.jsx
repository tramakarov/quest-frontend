import React from 'react'

import './FormTemplate.css'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { decodeException } from './Utils'
import PropTypes from 'prop-types'

export default function LoginFormTemplate (props) {
  const onFinish = values => {
    props.submitFunction(values.username, values.password, values.remember)
  }

  const exceptionDetail = decodeException(props.exceptionDetail)

  return (
    <div className="auth-form-container">
      <Form
        name="login-form"
        className="auth-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Это поле обязательно, правда'
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="юзернейм" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Это поле тоже обязательно, правда'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="пароль"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
                        Войти
          </Button>
        </Form.Item>

        <Form.Item>
          <p>
            {exceptionDetail}
          </p>
        </Form.Item>
      </Form>
    </div>
  )
};

LoginFormTemplate.propTypes = {
  exceptionDetail: PropTypes.object,
  submitFunction: PropTypes.func
}
