import React from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';


export function Layout({main}) {
  console.log(main);
  return (
    <div>
      <Header />
      <Main main={main} />
    </div>
  );
}
