import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export function Nav({listNav}) {
  const [activeId, setActiveId] = useState();
  useEffect(() => {
    setActiveId(window.location.pathname);
  }, [activeId]);
  return (
    <div className='nav left'>
      <div className='info flex alignCenter'>
        <div className='info_avt'>
          <img src='./img/avt.jpg' alt='' />
        </div>
        <div className='info_user'>
          <div className='info_user-name'>Phạm Thành Trung</div>
          <div className='info_user-status flex alignCenter'>
            <div className='color' />
            <div className='status'>Trực tuyến</div>
          </div>
        </div>
      </div>
      <div className='menu'>
        {listNav.map((nav) => (
          <Link
            className={
              activeId === nav.id
                ? 'menu_child flex alignCenter active'
                : 'menu_child flex alignCenter'
            }
            to={nav.id}
            key={nav.key}
            onClick={() => setActiveId(nav.id)}
          >
            <div className='menu_child-icon'>{nav.svg}</div>
            <div className='menu_child-text'>{nav.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
