import { NavLink } from 'react-router-dom';
import unlockLogo from '../../assets/image/Logo/icon-unlock.svg';
import style from './Navigation.module.scss';
import Logo from '../Logo/Logo';

export function Navigation() {
  return (
    <nav className={style.nav}>
      <section>
        <Logo/>
        <ul>
          <li>
          <NavLink
      to='/'
      style={({ isActive }) => ({
        color: isActive ? 'var(--activeGreen)' : 'black',
      })}
    >
      Forside
    </NavLink>
          </li>
          <li>
            <NavLink
              to='/sorting'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'var(--activeGreen)' : 'black',
                };
              }}
            >
              Sortering
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/recycling'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'var(--activeGreen)' : 'black',
                };
              }}
            >
              Genbrugsstationer
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/order'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'var(--activeGreen)' : 'black',
                };
              }}
            >
              Bestil Beholder
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              // style={({ isActive }) => {
              //   return {
              //     color: isActive ? 'var(--activeGreen)' : 'black',
              //   };
              // }}
            >
               <div>
        <img className={style.Unlocklogo} src={unlockLogo} alt='unlock' />
        </div>
              {/* Login */}
            </NavLink>
          </li>
        </ul>
        {/* <div className={style.Unlocklogo}>
        <img src={unlockLogo} alt='unlock' />
        </div> */}
      </section>
    </nav>
  );
}



