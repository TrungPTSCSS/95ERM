import {Card, Input, Table} from 'antd';
import React from 'react';
import {SearchOutlined} from '@ant-design/icons';

function Anamnesis() {
  const columns = [
    {
      title: 'Tên bệnh',
      dataIndex: 'name',
      key: 'name',
    },
  ];
  const data = [
    {
      key: 1,
      name: 'Kiểm tra sức khoẻ tổng quát thường lệ cho nhân viên cơ quan (Z10.1)',
    },
    {
      key: 2,
      name: 'Rối loạn chức năng gan trong bệnh phân loại nơi khác (K77)',
    },
  ];
  return (
    <Card title='Tiền sử bệnh' bordered={false}>
      <div className='row'>
        <div className='col-12'>
          <Input
            allowClear
            size='large'
            placeholder='Tìm kiếm ...'
            className='style-input'
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <Table className='table' columns={columns} dataSource={data} />
    </Card>
  );
}

export default Anamnesis;
