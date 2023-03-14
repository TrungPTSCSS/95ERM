import {Button, Card, DatePicker, Form, Input, Select} from 'antd';
import React from 'react';
const {Option} = Select;

function FormInfo() {
  const [formInfo] = Form.useForm();
  return (
    <Card title='Thông tin tài khoản' bordered={false}>
      <Form
        name='administrativeInfo'
        layout='vertical'
        form={formInfo}
        scrollToFirstError
      >
        <div className='row'>
          <div className='col-6'>
            <Form.Item label='Họ và tên'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
          <div className='col-6'>
            <Form.Item label='Mã thẻ KCBĐT'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Form.Item label='Ngày sinh'>
              <DatePicker
                disabled={true}
                className='style-input'
                style={{width: '100%'}}
              />
            </Form.Item>
          </div>
          <div className='col-4'>
            <Form.Item label='Giới tính'>
              <Select
                disabled={true}
                initialvalues='male'
                className='style-select'
              >
                <Option value='male'>Nam</Option>
                <Option value='female'>Nữ</Option>
                <Option value='other'>Khác</Option>
              </Select>
            </Form.Item>
          </div>
          <div className='col-4'>
            <Form.Item label='Email'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
        </div>
        <Form.Item label='Địa chỉ 1'>
          <Input.TextArea
            disabled={true}
            style={{height: '145px'}}
            showCount
            maxLength={100}
            placeholder='Nhập số nhà, tên đường'
          />
        </Form.Item>
        <Form.Item label='Địa chỉ 2'>
          <Input.TextArea
            disabled={true}
            style={{height: '145px'}}
            showCount
            maxLength={100}
            placeholder='Nhập số nhà, tên đường'
          />
        </Form.Item>
        <div className='row'>
          <div className='col-6'>
            <Form.Item label='Tỉnh'>
              <Select
                disabled={true}
                initialvalues='male'
                className='style-select'
              >
                <Option value='HCM'>HCM</Option>
                <Option value='HN'>HN</Option>
                <Option value='other'>Khác</Option>
              </Select>
            </Form.Item>
          </div>
          <div className='col-6'>
            <Form.Item label='Mã bưu điện'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Form.Item label='Điện thoại nhà'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
          <div className='col-4'>
            <Form.Item label='Di động'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
          <div className='col-4'>
            <Form.Item label='Cơ quan'>
              <Input disabled={true} className='style-input' />
            </Form.Item>
          </div>
        </div>
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

export default FormInfo;
