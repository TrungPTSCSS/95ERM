import React from 'react';
import Banner from './components/Banner';
import NavRight from './components/NavRight';
import VitalSignsChart from './components/VitalSignsChart';
import Anamnesis from './components/Anamnesis';
function HealthSummary() {
  const listBannerChildTop = [
    {
      key: 'total-diseases',
      title: 'Tổng Số Bệnh Lý',
      background: 'linear-gradient(105.55deg, #FF91FB 0%, #A313A6 100%)',
      icon: './img/total-diseases.svg',
    },
    {
      key: 'total-media',
      title: 'Tổng Hồ Sơ Khám',
      background: 'linear-gradient(105.55deg, #51D7CF 0%, #2EACE2 100%)',
      icon: './img/total-media.svg',
    },
    {
      key: 'more',
      title: 'Thông Tin Khác',
      background: 'linear-gradient(105.55deg, #FF9595 0%, #F92323 100%)',
      icon: './img/more.svg',
    },
  ];
  const listBannerChildBottom = [
    {
      key: 'total-diseases',
      title: 'Xét Nghiệm',
      background: 'linear-gradient(285.55deg, #FD4A00 0%, #FC9368 100%)',
      icon: './img/test.svg',
    },
    {
      key: 'total-media',
      title: 'Chuẩn Đoán Hình',
      background: 'linear-gradient(285.55deg, #FFB800 0%, #FFDD85 100%)',
      icon: './img/imgdetect.svg',
    },
    {
      key: 'more',
      title: 'Toa Thuốc',
      background: 'linear-gradient(285.55deg, #278506 0%, #4CD84C 100%)',
      icon: './img/medicine.svg',
    },
    {
      key: 'more1',
      title: 'Đo Thị Lực',
      background: 'linear-gradient(285.55deg, #2497EB 0%, #22E8DC 100%)',
      icon: './img/eyeInfo.svg',
    },
  ];
  const dataChart = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: 0.4,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: 1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className='healthSummary row'>
      <div className='col-md-9'>
        <div className='healthSummary-sub fs-16'>Xin chào, Trung!</div>
        <div className='text-primary healthSummary-title'>Tóm tắt sức khỏe</div>
        <Banner
          listBannerChildTop={listBannerChildTop}
          listBannerChildBottom={listBannerChildBottom}
        />
        <VitalSignsChart data={dataChart} />
        <Anamnesis />
      </div>
      <div className='col-md-3'>
        <NavRight />
      </div>
    </div>
  );
}

export default HealthSummary;
