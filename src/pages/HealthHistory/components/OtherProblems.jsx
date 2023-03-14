import {Button, Card, Form, Input} from 'antd';
import React from 'react';

function OtherProblems() {
  const [formOther] = Form.useForm();
  return (
    <Card title='Vấn đề khác (ghi rõ nếu có)' bordered={false}>
      <Form
        name='other'
        layout='vertical'
        form={formOther}
        scrollToFirstError
      >
        <Form.Item>
          <Input.TextArea style={{height: '145px'}} showCount />
        </Form.Item>
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

export default OtherProblems;
