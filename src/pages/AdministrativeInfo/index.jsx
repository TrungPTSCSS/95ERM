import {Button, DatePicker, Form, Input, Select} from 'antd';
import React from 'react';
import {LayoutHeader} from '../../components';

const {Option} = Select;
export default function AdministrativeInfo() {
  const [form] = Form.useForm();
  return (
    <div className='administrativeInfo'>
      <LayoutHeader title='Thông tin hành chính' />
      <Form
        name='administrativeInfo'
        layout='vertical'
        form={form}
        // initialValues='vertical'
        // onValuesChange={onFormLayoutChange}
        scrollToFirstError
      >
        {/* name */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='Họ và tên'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Quan hệ với chủ hộ'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Mã hộ gia đình'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* gender */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='Giới tính'>
              <Select initialvalues='male' className='style-select'>
                <Option value='male'>Nam</Option>
                <Option value='female'>Nữ</Option>
                <Option value='other'>Khác</Option>
              </Select>
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Nhóm máu: Hệ ABO'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Hệ RH'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* phone */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='Điện thoại (Cố định)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Di động'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Email'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* dob */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='Ngày sinh'>
              <DatePicker className='style-input' style={{width: '100%'}} />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Năm sinh'>
              <DatePicker
                picker='year'
                className='style-input'
                style={{width: '100%'}}
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-12'>
            <Form.Item label='Tỉnh/TP đăng ký khai sinh'>
              <Select initialvalues='hcm' className='style-select'>
                <Option value='hcm'>TP.HCM</Option>
                <Option value='hn'>Ha Noi</Option>
                <Option value='no'>...</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        {/* cmnd */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='CMND/CCCD'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Ngày cấp'>
              <DatePicker className='style-input' style={{width: '100%'}} />
            </Form.Item>
          </div>
          <div className='col-md-6 col-12'>
            <Form.Item label='Nơi cấp'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* national */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='Dân tộc'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Quốc tịch'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Tôn giáo'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Nghề nghiệp'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* address */}
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Form.Item label='Nơi ở hiện tại (Thôn/xóm, số nhà, đường phố)'>
              <Input.TextArea
                style={{height: '145px'}}
                showCount
                maxLength={100}
                placeholder='Nhập số nhà, tên đường'
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-12'>
            <div className='row'>
              <div className='col-md-6 col-12'>
                <Form.Item label='Xã phường'>
                  <Select initialvalues='1' className='style-select'>
                    <Option value='1'>Xã 1</Option>
                    <Option value='2'>Xã 2</Option>
                    <Option value='no'>...</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className='col-md-6 col-12'>
                <Form.Item label='Quận huyện'>
                  <Select initialvalues='Q1' className='style-select'>
                    <Option value='Q1'>Q1</Option>
                    <Option value='Q2'>Q2</Option>
                    <Option value='no'>...</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 col-12'>
                <Form.Item label='Tỉnh/Thành phố'>
                  <Select initialvalues='Q1' className='style-select'>
                    <Option value='hcm'>TP.HCM</Option>
                    <Option value='hanoi'>Ha Noi</Option>
                    <Option value='no'>...</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div className='line'></div>
        {/* bhyt */}
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Form.Item label='Mã định danh BHYT/Số thẻ BHYT'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* address HKTT*/}
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Form.Item label='Nơi đăng ký HKTT (Thôn/xóm số nhà, đường phố)'>
              <Input.TextArea
                style={{height: '145px'}}
                showCount
                maxLength={100}
                placeholder='Nhập số nhà, tên đường'
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-12'>
            <div className='row'>
              <div className='col-md-6 col-12'>
                <Form.Item label='Xã phường'>
                  <Select initialvalues='1' className='style-select'>
                    <Option value='1'>Xã 1</Option>
                    <Option value='2'>Xã 2</Option>
                    <Option value='no'>...</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className='col-md-6 col-12'>
                <Form.Item label='Quận huyện'>
                  <Select initialvalues='Q1' className='style-select'>
                    <Option value='Q1'>Q1</Option>
                    <Option value='Q2'>Q2</Option>
                    <Option value='no'>...</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 col-12'>
                <Form.Item label='Tỉnh/Thành phố'>
                  <Select initialvalues='Q1' className='style-select'>
                    <Option value='hcm'>TP.HCM</Option>
                    <Option value='hanoi'>Ha Noi</Option>
                    <Option value='no'>...</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        {/* name-father/mother */}
        <div className='row'>
          <div className='col-md-3 col-12'>
            <Form.Item label='Họ và tên bố'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Họ và tên mẹ'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Họ và tên NCSC'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-3 col-12'>
            <Form.Item label='Mối quan hệ'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* phone-family */}
        {/* name-father/mother */}
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Form.Item label='Điện thoại (bố/mẹ/NCSC)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6 col-12'>
            <Form.Item label='Di động'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        {/* button */}
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Form.Item>
              <Button className='button' htmlType='submit'>
                Tiến hành tiếp nhận
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
