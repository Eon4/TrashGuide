
// Logo prop component
import React from 'react';
import style from './Logo.module.scss';
import logo from '../../assets/image/Logo/logo.svg';

const Logo = ({ text, isFooter }) => {
  // Conditionally apply styles based on isFooter prop
  const logoClassName = isFooter ? style.footerLogo : style.logo;

  return (
    <div className={logoClassName}>
      <img src={logo} alt='Logo' />
      <h1 className={style.logoText}>Affaldsguiden</h1>
    </div>
  );
}

export default Logo;

