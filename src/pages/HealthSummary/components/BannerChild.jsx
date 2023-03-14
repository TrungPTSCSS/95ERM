import React from 'react';

function BannerChild({banner}) {
  return (
    <div className='col-md-3 different'>
      <div className='banner_child' style={{background: banner.background}}>
        <div className='banner_child-title font-bold fs-16'>{banner.title}</div>
        <div className='banner_child-span font-bold fs-12'>
          Bấm để xem chi tiết
        </div>
        <img className='banner_child-icon' src={banner.icon} alt='' />
      </div>
    </div>
  );
}

export default BannerChild;
