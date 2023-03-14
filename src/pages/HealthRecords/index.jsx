import React from 'react';
import {LayoutHeader} from '../../components';
import CustomTimeLine from './components/CustomTimeLine';

function HealthRecords() {
  const dataTimeLine = [
    {
      time: '2015-09-01',
      color: 'red',
      children: 'Create a services site 2015-09-01',
      background: '#0193DE',
    },
    {
      time: '2015-09-01',
      children: 'Solve initial network problems 2015-09-01',
      color: 'red',
      background: '#0193DE',
    },
    {
      time: '2015-09-01',
      color: 'red',
      background: '#0193DE',
      children: 'Technical testing 2015-09-01',
    },
    {
      time: '2015-09-01',
      children: 'Network problems being solved 2015-09-01',
      color: 'red',
      background: '#0193DE',
    },
    {
      time: '2015-09-01',
      children: 'Network problems being solved 2015-09-01',
      color: 'red',
      background: '#0193DE',
    },
  ];
  return (
    <div>
      <LayoutHeader title='Sổ khám bệnh' />
      <div className='timeline'>
        {dataTimeLine.map((item, index) => (
          <CustomTimeLine key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default HealthRecords;
