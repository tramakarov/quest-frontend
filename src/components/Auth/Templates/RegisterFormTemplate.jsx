import React from 'react'

import './FormTemplate.css'

import { Alert, Button, Form, Input } from 'antd'
import {UserOutlined, LockOutlined, GoogleOutlined} from '@ant-design/icons'

import { decodeException } from './Utils'
import PropTypes from 'prop-types'
import { GOOGLE_CLIENT_ID } from '../../../settings'
import {GoogleLogin} from "react-google-login";
import OAuthLoginButton, {GOOGLE_AUTH} from "./OAuthLoginButton";

export default function RegisterFormTemplate (props) {
  const onFinish = values => {
    props.submitFunction(values.username, values.password)
  }

  const exceptionDetail = decodeException(props.exceptionDetail)

    const alert = (exceptionDetail !== '') ? (
        <div className={'auth-alert-container'}>
            <Alert message={exceptionDetail} type="error" closable={true} showIcon />
        </div>
    ) : (<React.Fragment/>)

  return (
    <div className="auth-form-container">
        {alert}
      <Form
        name="register-form"
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

        <Form.Item
          name="password_repeat"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Анука повтори свой пароль!'
            },
            ({ getFieldValue }) => ({
              validator (rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('Пароли не совпадают')
              }
            })
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="повтори пароль"
          />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="auth-form-button">
                Зарегистрироваться
            </Button>
        </Form.Item>
          <OAuthLoginButton oAuth={props.oAuth} authProvider={GOOGLE_AUTH} buttonText={"Регистрация с помощью Google"}/>
      </Form>
    </div>
  )
};

RegisterFormTemplate.propTypes = {
  submitFunction: PropTypes.func
}
