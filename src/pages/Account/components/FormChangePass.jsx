import {Button, Card, Form, Input} from 'antd';
import React from 'react';

function FormChangePass() {
  const [formChangePass] = Form.useForm();

  return (
    <Card title='Đổi mật khẩu' bordered={false}>
      <Form
        name='administrativeInfo'
        layout='vertical'
        form={formChangePass}
        scrollToFirstError
      >
        <Form.Item label='Mật khẩu cũ'>
          <Input.Password className='style-input' />
        </Form.Item>
        <Form.Item label='Mật khẩu mới'>
          <Input.Password className='style-input' />
        </Form.Item>
        <Form.Item label='Xác nhận mật khẩu mới'>
          <Input.Password className='style-input' />
        </Form.Item>
        <Form.Item label='Câu hỏi bảo mật'>
          <Input className='style-input' />
        </Form.Item>
        <Form.Item label='Câu trả lời'>
          <Input className='style-input' />
        </Form.Item>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Form.Item>
              <Button className='button' htmlType='submit'>
                Cập nhật
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
}

export default FormChangePass;
