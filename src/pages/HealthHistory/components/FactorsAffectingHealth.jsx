import {Button, Card, Checkbox, Form, Input, Radio} from 'antd';
import React, {useState} from 'react';

function FactorsAffectingHealth() {
  const [formFactorsAffectingHealth] = Form.useForm();
  const [isSmoke, setIsSmoke] = useState(1);
  const [isDrunk, setIsDrunk] = useState(1);
  const [isUseNarcotic, setIsUseNarcotic] = useState(1);
  const [isSportsActivities, setIsSportsActivities] = useState(1);

  const optionSmoke = [
    {label: 'Hút thuốc thường xuyên', value: 'Apple'},
    {label: 'Đã bỏ', value: 'Pear'},
  ];
  const optionDrunk = [
    {label: 'Uống nhiều ly trên ngày', value: 'Apple'},
    {label: 'Đã bỏ', value: 'Pear'},
  ];
  const optionUseNarcotic = [
    {label: 'Sử dụng thường xuyên', value: 'Apple'},
    {label: 'Đã bỏ', value: 'Pear'},
  ];
  const optionSportsActivities = [
    {label: 'Thường xuyên tập thể dục, thể thao', value: 'Apple'},
  ];
  const onChangeTypeBirth = (e) => {
    console.log('radio checked', e.target.value);
    setIsSmoke(e.target.value);
  };
  const onChangeTypeDrunk = (e) => {
    console.log('radio checked', e.target.value);
    setIsDrunk(e.target.value);
  };
  const onChangeTypeUseNarcotic = (e) => {
    console.log('radio checked', e.target.value);
    setIsUseNarcotic(e.target.value);
  };
  const onChangeTypeSportsActivities = (e) => {
    console.log('radio checked', e.target.value);
    setIsSportsActivities(e.target.value);
  };
  const onChangeOptionSmoke = (checkedValues) => {};
  const onChangeOptionDrunk = (checkedValues) => {};
  const onChangeOptionUseNarcotic = (checkedValues) => {};
  const onChangeOptionSportsActivities = (checkedValues) => {};

  return (
    <Card title='Yếu tố nguy cơ đối với sức khỏe cá nhân' bordered={false}>
      <Form
        name='factorsAffectingHealth'
        layout='vertical'
        form={formFactorsAffectingHealth}
        scrollToFirstError
      >
        <Form.Item label='Hút thuốc lá, lào'>
          <Radio.Group onChange={onChangeTypeBirth} value={isSmoke}>
            <Radio value={1}>Có</Radio>
            <Radio value={2}>Không</Radio>
          </Radio.Group>
          <Checkbox.Group
            options={optionSmoke}
            onChange={onChangeOptionSmoke}
          />
        </Form.Item>
        <Form.Item label='Uống bia, rượu thường xuyên'>
          <Radio.Group onChange={onChangeTypeDrunk} value={isDrunk}>
            <Radio value={1}>Có</Radio>
            <Radio value={2}>Không</Radio>
          </Radio.Group>
          <Checkbox.Group
            options={optionDrunk}
            onChange={onChangeOptionDrunk}
          />
        </Form.Item>
        <Form.Item label='Sử dụng ma túy'>
          <Radio.Group onChange={onChangeTypeUseNarcotic} value={isUseNarcotic}>
            <Radio value={1}>Có</Radio>
            <Radio value={2}>Không</Radio>
          </Radio.Group>
          <Checkbox.Group
            options={optionUseNarcotic}
            onChange={onChangeOptionUseNarcotic}
          />
        </Form.Item>
        <Form.Item label='Hoạt động thể thao'>
          <Radio.Group
            onChange={onChangeTypeSportsActivities}
            value={isSportsActivities}
          >
            <Radio value={1}>Có</Radio>
            <Radio value={2}>Không</Radio>
          </Radio.Group>
          <Checkbox.Group
            options={optionSportsActivities}
            onChange={onChangeOptionSportsActivities}
          />
        </Form.Item>
        <div className='row'>
          <div className='col-md-8'>
            <Form.Item label='Yếu tố tiếp xúc nghề nghiệp/ Môi trường sống(Hóa chất, bụi, ồn, virút,...) ghi rõ yếu tố tiếp xúc'>
              <Input.TextArea style={{height: '45px'}} showCount />
            </Form.Item>
          </div>
          <div className='col-md-4'>
            <Form.Item label='Chiều dài lúc đẻ (cm)'>
              <Input className='style-input' />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Item label='Dị tật bẩm sinh (ghi rõ nếu có)'>
              <Input.TextArea style={{height: '45px'}} showCount />
            </Form.Item>
          </div>
          <div className='col-md-6'>
            <Form.Item label='Vấn đề khác (ghi rõ nếu có)'>
              <Input.TextArea style={{height: '45px'}} showCount />
            </Form.Item>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Item>
              <Button className='button' htmlType='submit'>
                Cập nhật yếu tố nguy cơ đối với sức khỏe cá nhân
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
}

export default FactorsAffectingHealth;
