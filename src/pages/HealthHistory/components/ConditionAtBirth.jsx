import {Button, Card, Checkbox, Form, Input, Radio} from 'antd';
import React, {useState} from 'react';

function ConditionAtBirth() {
  const [typeBirth, setTypeBirth] = useState(1);
  const [formConditionAtBirth] = Form.useForm();
  const optionsConditionAtBirth = [
    {label: 'Đẻ đều tháng', value: 'Apple'},
    {label: 'Bị ngạt lúc đẻ', value: 'Pear'},
  ];
  const onChangeTypeBirth = (e) => {
    console.log('radio checked', e.target.value);
    setTypeBirth(e.target.value);
  };
  const onChangeOptionsConditionAtBirth = (checkedValues) => {};
  return (
    <Card title='Tình trạng lúc sinh' bordered={false}>
      <Form
        name='conditionAtBirth'
        layout='vertical'
        form={formConditionAtBirth}
        scrollToFirstError
      >
        <Radio.Group onChange={onChangeTypeBirth} value={typeBirth}>
          <Radio value={1}>Đẻ thường</Radio>
          <Radio value={2}>Đẻ mổ</Radio>
        </Radio.Group>
        <Checkbox.Group
          options={optionsConditionAtBirth}
          onChange={onChangeOptionsConditionAtBirth}
        />
        <div className='row' style={{marginTop: '20px'}}>
          <div className='col-md-6'>
            <Form.Item label='Cân nặng lúc đẻ (gr)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Chiều dài lúc đẻ (cm)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Dị tật bẩm sinh (ghi rõ nếu có)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Vấn đề khác (ghi rõ nếu có)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Item>
              <Button className='button' htmlType='submit'>
                Cập nhật tình trạng lúc sinh
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
}

export default ConditionAtBirth;
