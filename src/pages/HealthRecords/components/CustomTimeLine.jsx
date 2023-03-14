import {ClockCircleFilled} from '@ant-design/icons';
import {Button} from 'antd';
import React from 'react';

function CustomTimeLine({item, index}) {
  return (
    <div className='timeline'>
      <div className='row '>
        <div className='col-2 offset-1'>
          <div
            className='timeline-time fs-14 font-bold'
            style={{background: item.background}}
            key={index}
          >
            {item.time}
          </div>
        </div>
        <div className='col-8'></div>
      </div>
      <div className='row'>
        <div className='col-2 offset-1'>
          <div className='timeline-icon'>
            <div className='parent-icon'>
              <ClockCircleFilled
                color='#0193de'
                style={{color: '#0193DE', width: '35px', height: '35px'}}
              />
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div className='timeline-content'>
            <div className='titleContent'>{`ITEM ${index}`}</div>
            <div className='content'>{item.children}</div>
            <div style={{padding: '0 20px 20px'}}>
              <Button className='custom-button' htmlType='submit'>
                Tiến hành tiếp nhận
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomTimeLine;
