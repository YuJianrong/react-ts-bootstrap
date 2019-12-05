import React from 'react';
import style from './Home.module.less';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className={style.header}>Hello</h1>
      <h2 style={{ textAlign: 'center' }}>
        <Link to="/app">Go to App</Link>
      </h2>
    </div>
  );
}
