import {Button, Card, Form, Input} from 'antd';
import React from 'react';

function Disabilities() {
  const [formDisabilities] = Form.useForm();
  return (
    <Card title='Khuyết tật' bordered={false}>
      <Form
        name='other'
        layout='vertical'
        form={formDisabilities}
        scrollToFirstError
      >
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Thính lực'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Thị lực'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Tay'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Chân'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Cong vẹo cột sống'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Khe hở môi và khe hở vòm miệng'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Form.Item label='Khuyết tật khác'>
              <Input.TextArea style={{height: '145px'}} showCount />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
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

export default Disabilities;
