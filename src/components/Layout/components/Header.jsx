import React from 'react';
import {useNavigate} from 'react-router-dom';

export function Header() {
  const nav = useNavigate();
  const handlerSmallMenu = () => {
    document.querySelectorAll('.left').forEach((element) => {
      element.classList.toggle('smallLeft');
    });
    document.querySelectorAll('.right').forEach((element) => {
      element.classList.toggle('largeRight');
    });
  };
  const handlerClickUser = () => {
    document.querySelector('.menuLogout').classList.toggle('activeMenuLogout');
  };
  const handlerNoti = () => {
    document.querySelector('.notification-area').classList.toggle('activeNoti');
  };
  const changeRootColor = () => {
    document.querySelector('body').classList.toggle('dark');
  };
  const navigateAccount = () => {
    nav('/account');
  };
  return (
    <header className='container-fluid'>
      <div className='row header'>
        <div className='left logo cursor'>
          <img src='./img/logo.png' alt='' />
        </div>
        <div className='right header-right'>
          <div className='menu-button cursor' onClick={handlerSmallMenu}>
            <img src='./img/HamburgerButton.svg' alt='' />
          </div>
          <div className='user-button'>
            <div className='notification cursor' onClick={handlerNoti}>
              <img src='./img/bell.svg' alt='' />
            </div>
            <div className='avt' onClick={handlerClickUser}>
              <img className='cursor' src='./img/avt.jpg' alt='' />
              <div className='menuLogout'>
                <button className='cursor' onClick={navigateAccount}>
                  Thông tin cá nhân
                </button>
                <button className='cursor' onClick={changeRootColor}>
                  Chế độ tối
                </button>
                <button className='cursor'>Đăng xuất</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
