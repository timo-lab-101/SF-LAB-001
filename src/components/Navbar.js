import React from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 切换语言
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('zh')}>中文</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;