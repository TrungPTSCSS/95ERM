import React from 'react';

export function Notification() {
  return (
    <div className='notification-area'>
      <div className='noti-title font-bold fs-16'>Notification</div>
      <div className='noti-content'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <NotiChild key={e} />
        ))}
      </div>
    </div>
  );
}
function NotiChild() {
  return (
    <div className='noti_child font-bold fs-16 cursor'>
      <div className='noti_child-img'>
        <img src='./img/img.jpg' alt='' />
      </div>
      <div>
        <div className='noti_child-title font-bold fs-14'>Title</div>
        <div className='noti_child-content font-regular fs-12'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  );
}
