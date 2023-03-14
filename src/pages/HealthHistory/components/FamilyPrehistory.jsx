import {Button, Card, Checkbox, Col, Form, Input, Row, Table} from 'antd';
import React from 'react';

function FamilyPrehistory() {
  const [formFamilyPrehistory] = Form.useForm();
  const columns = [
    {
      title: 'Loại',
      dataIndex: 'type',
      rowScope: 'row',
    },
    {
      title: 'Mô tả rõ',
      render: () => <Input.TextArea></Input.TextArea>,
    },
    {
      title:
        'Người mắc(ghi rõ quan hệ huyết thống: ông, bà, bố, mẹ, anh, chị, em...)',
      render: () => <Input.TextArea></Input.TextArea>,
    },
  ];
  const data = [
    {
      type: 'Thuốc',
    },
    {
      type: 'Hóa chất/mỹ phẩm',
    },
    {
      type: 'Thực phẩm',
    },
    {
      type: 'Khác',
    },
  ];
  const optionDiseases = [
    {label: 'Bệnh tim mạch', value: '1'},
    {label: 'Đái tháo đường', value: '2'},
    {label: 'Tăng huyết áp', value: '7'},
    {label: 'Hen suyễn', value: '8'},
    {label: 'Tâm thần', value: '10'},
    {label: 'Động kinh', value: '11'},
  ];
  const onChangeOptionDiseases = (checkedValues) => {};

  return (
    <Card title='Tiền sử gia đình' bordered={false}>
      <Form
        name='historyOfMalformationsAllergies'
        layout='vertical'
        form={formFamilyPrehistory}
        scrollToFirstError
      >
        <div className='title font-bold fs-16'>Dị ứng</div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{position: ['none']}}
          bordered
        />
        <div className='title font-bold fs-16' style={{marginTop: '20px'}}>
          Bệnh tật
        </div>
        <div className='titleFormFamilyPrehistory'>
          <div className='titleFormFamilyPrehistory-left'>
            <div className='title font-bold fs-14'>Loại</div>
          </div>
          <div className='titleFormFamilyPrehistory-right'>
            <div className='title font-bold fs-14'>
              Người mắc(ghi rõ quan hệ huyết thống: ông, bà, bố, mẹ, anh,
              chị...)
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Checkbox.Group
              onChange={onChangeOptionDiseases}
              style={{width: '100%'}}
            >
              <Row style={{width: '100%'}}>
                <Col span={24}>
                  {optionDiseases.map((disease) => (
                    <Row key={disease.value} style={{marginBottom: '20px'}}>
                      <Col span={3}>
                        <Checkbox
                          value={disease.value}
                          style={{marginTop: '10px'}}
                        >
                          {disease.label}
                        </Checkbox>
                      </Col>
                      <Col span={21}>
                        <Input className='style-input' />
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Ung thư'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Người mắc(ghi rõ quan hệ huyết thống: ông, bà, bố, mẹ, anh, chị...)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Lao'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Người mắc(ghi rõ quan hệ huyết thống: ông, bà, bố, mẹ, anh, chị...)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Khác'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Người mắc(ghi rõ quan hệ huyết thống: ông, bà, bố, mẹ, anh, chị...)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Item>
              <Button className='button' htmlType='submit'>
                Cập nhật tiền sử gia đình
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
}

export default FamilyPrehistory;
