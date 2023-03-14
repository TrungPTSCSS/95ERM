import {Tabs} from 'antd';
import React from 'react';
import FormChangePass from './components/FormChangePass';
import FormInfo from './components/FormInfo';

export default function Account() {
  const items = [
    {
      key: '1',
      label: `Thông tin tài khoản`,
      children: <FormInfo />,
    },
    {
      key: '2',
      label: `Đổi mật khẩu`,
      children: <FormChangePass />,
    },
  ];
  return (
    <div className='account'>
      <div className='account_avt'>
        <div className='img cursor'>
          <img src='./img/img.jpg' alt='' />
          <div className='changePhoto'>
            <div className='icon'>
              <img src='./img/photo.svg' alt='' />
            </div>
            <div className='fs-14 font-bold'>Cập nhật</div>
          </div>
        </div>
      </div>
      <div className='account_info'>
        <div className='name fs-20 font-bold'>Phạm Thành Trung</div>
        <div className='phone fs-16'>0132.678.891</div>
      </div>
      <div className='formInfo'>
        <Tabs defaultActiveKey='1' items={items} />
      </div>
    </div>
  );
}
