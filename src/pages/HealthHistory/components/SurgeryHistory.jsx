import {Button, Card, Form, Input} from 'antd';
import React from 'react';

function SurgeryHistory() {
  const [formSurgeryHistory] = Form.useForm();
  return (
    <Card
      title='Tiền sử phẫu thuật (Ghi rõ bộ phận cơ thể đã phẫu thuật và năm phẫu thuật)'
      bordered={false}
    >
      <Form
        name='administrativeInfo'
        layout='vertical'
        form={formSurgeryHistory}
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
      </Form>{' '}
    </Card>
  );
}

export default SurgeryHistory;
