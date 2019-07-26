import React from 'react'
import styles from './index.module.less'

import { Form, Icon, Input, Button } from 'antd'

function handleSubmit () {}

export default Form.create()(({ form }) => {
  const { getFieldDecorator, getFieldError, isFieldTouched } = form

  return (
    <div className={styles['retrieve-password']}>
      <Form onSubmit={handleSubmit} className="login-form" wrapperCol={{ offset: 4, span: 16 }}>
        <Form.Item>
          {getFieldDecorator('mail', {
            rules: [
              { required: true, message: 'Please input your e-mail address!' },
              { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: 'Please input valid e-mail address!' }
            ],
          })(
            <Input
              style={{ height: '37px' }}
              allowClear
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-Mail"
            />,
          )}
        </Form.Item>
        {
          (isFieldTouched('mail') && !getFieldError('mail')) &&
          <React.Fragment>
            <Form.Item>
              <Button
                type="primary"
                style={{ width: '100%', height: '37px' }}
              >
                Get Verification Code
              </Button>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your verification code!' }],
              })(
                <Input
                  style={{ height: '37px' }}
                  allowClear
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
          </React.Fragment>
        }
      </Form>
    </div>
  )
})