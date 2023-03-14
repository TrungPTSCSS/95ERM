import React from 'react';
import BannerChild from './BannerChild';

function Banner({listBannerChildTop, listBannerChildBottom}) {
  return (
    <div style={{marginLeft: '15px'}}>
      <div className='row banner'>
        {listBannerChildTop.map((banner) => (
          <BannerChild banner={banner} key={banner.key}/>
        ))}
      </div>
      <div className='row banner'>
        {listBannerChildBottom.map((banner) => (
          <BannerChild banner={banner} key={banner.key}/>
        ))}
      </div>
    </div>
  );
}

export default Banner;
