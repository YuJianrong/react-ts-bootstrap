import React from 'react';

import logo from 'assets/logo.svg';
import AppHeader from 'components/AppHeader';
import style from './App.module.less';

const App = () => {
  const a: { b?: { c: number } } = {};
  console.log(a.b?.c);
  return (
    <div className={style.App}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <AppHeader />
        <p>
          Edit <code>src/pages/App.tsx</code> and save to reload.
        </p>
        <a
          className={style.Link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
