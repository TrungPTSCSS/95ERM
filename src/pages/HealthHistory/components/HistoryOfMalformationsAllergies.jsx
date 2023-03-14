import {Button, Card, Checkbox, Col, Form, Input, Row} from 'antd';
import React from 'react';

function HistoryOfMalformationsAllergies() {
  const [formHistoryOfMalformationsAllergies] = Form.useForm();
  const onChangeOptionDiseases = (checkedValues) => {};
  const optionDiseases = [
    {label: 'Bệnh tim mạch', value: '1'},
    {label: 'Đái tháo đường', value: '2'},
    {label: 'Bệnh phổi mãn tính', value: '3'},
    {label: 'Bệnh bướu cổ', value: '4'},
    {label: 'Tim bẩm sinh', value: '5'},
    {label: 'Tự kỷ', value: '6'},
    {label: 'Tăng huyết áp', value: '7'},
    {label: 'Hen suyễn', value: '8'},
    {label: 'Viêm gan', value: '9'},
    {label: 'Tâm thần', value: '10'},
    {label: 'Động kinh', value: '11'},
  ];
  return (
    <Card title='Tiền sử dị tật, dị ứng' bordered={false}>
      <Form
        name='historyOfMalformationsAllergies'
        layout='vertical'
        form={formHistoryOfMalformationsAllergies}
        scrollToFirstError
      >
        <div className='row'>
          <div className='col-md-6'>
            <div className='title font-bold fs-16'>Dị ứng</div>
            <Form.Item label='Thuốc'>
              <Input.TextArea style={{height: '75px'}} showCount />
            </Form.Item>
            <Form.Item label='Hóa chất/mỹ phẩm'>
              <Input.TextArea style={{height: '75px'}} showCount />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <div className='title font-bold fs-16'>Bệnh tật</div>
            <Form.Item label='Hút thuốc lá, lào'>
              <Checkbox.Group onChange={onChangeOptionDiseases}>
                <Row>
                  {optionDiseases.map((disease) => (
                    <Col key={disease.value} span={12} style={{marginBottom: '15px'}}>
                      <Checkbox value={disease.value}>
                        {disease.label}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Thực phẩm'>
              <Input.TextArea style={{height: '94px'}} showCount />
            </Form.Item>
            <Form.Item label='Khác'>
              <Input.TextArea style={{height: '94px'}} showCount />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Ung thư (ghi rõ loại ung thư)'>
              <Input.TextArea style={{height: '45px'}} showCount />
            </Form.Item>
            <Form.Item label='Lao (ghi rõ loại lao)'>
              <Input.TextArea style={{height: '45px'}} showCount />
            </Form.Item>
            <Form.Item label='Khác (nêu rõ)'>
              <Input.TextArea style={{height: '45px'}} showCount />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Item>
              <Button className='button' htmlType='submit'>
                Cập nhật tiền sử dị tật, dị ứng
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
}

export default HistoryOfMalformationsAllergies;
