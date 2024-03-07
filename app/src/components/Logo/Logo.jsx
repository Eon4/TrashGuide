
// Logo prop component
import style from './Logo.module.scss';
import logo from '../../assets/image/Logo/logo.svg';

const Logo = ({ text, isFooter }) => {
  // Here we conditionally apply styles based on the isFooter prop
  const logoClassName = isFooter ? style.footerLogo : style.logo;

  return (
    <div className={logoClassName}>
      <img src={logo} alt='Logo' />
      <h1 className={style.logoText}>Affaldsguiden</h1>
    </div>
  );
}

export default Logo;

