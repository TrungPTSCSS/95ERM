import {Button, Checkbox, Form, Input} from 'antd';
import React from 'react';

function Login() {
  const [formLogin] = Form.useForm();
  const onChangeOptionRememberMe = (checkedValues) => {};
  const optionRememberMe = [{label: 'Ghi nhớ tôi', value: 'rememberMe'}];
  return (
    <div className='login'>
      <div className='row'>
        <div className='col-md-5 left'>
          <div className='content'>
            <div className='login-title font-bold'>Chào mừng</div>
            <div className='login-des fs-18'>
              Lorem ipsum dolor sit amet consectetur. Semper elementum bibendum
              congue turpis dui id. Venenatis gravida mattis lorem fames duis
              nullam ultricies fringilla.
            </div>
          </div>
        </div>
        <div className='col-md-7 right'>
          <div className='logo'>
            <img src='./img/logo.png' alt='' />
          </div>
          <div className='form'>
            <div className='form_title font-bold text-primary'>Xin chào!</div>
            <div className='text-primary fs-16 form_des'>
              Đăng nhập vào tài khoản của bạn
            </div>
            <Form
              name='conditionAtBirth'
              layout='vertical'
              form={formLogin}
              scrollToFirstError
            >
              <div className='row'>
                <div className='col-12'>
                  <Form.Item label='Tên đăng nhập'>
                    <Input className='style-input' />
                  </Form.Item>
                </div>
                <div className='col-12'>
                  <Form.Item label='Mật khẩu'>
                    <Input.Password className='style-input' />
                  </Form.Item>
                </div>
              </div>
              <div className='row' style={{marginBottom:'50px'}}>
                <div className='col-6'>
                  <Checkbox.Group
                    options={optionRememberMe}
                    onChange={onChangeOptionRememberMe}
                  />
                </div>
                <div className='col-6'>
                  <div className='forget font-bold fs-14 text-primary cursor'>
                    Quên mật khẩu
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <Form.Item>
                    <Button className='button' htmlType='submit'>
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
