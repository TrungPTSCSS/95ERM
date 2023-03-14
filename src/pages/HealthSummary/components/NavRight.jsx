import React from 'react';

function NavRight() {
  return (
    <div className='nav_right'>
      <div className='nav_right-title fs-18 font-bold'>Tiêu điểm</div>
      <div className='nav_right-content'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e, i) => (
          <News element={e} key={i} />
        ))}
      </div>
    </div>
  );
}
function News({element}) {
  return (
    <div className='nav_right-contentChild'>
      <div className='imga'>
        <img src='./img/img.jpg' alt='' />
      </div>
      <div className='content'>
        <div className='title font-bold fs-14'>Tiêu điểm 1</div>
        <div className='descrip font-regular fs-14'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
}
export default NavRight;
