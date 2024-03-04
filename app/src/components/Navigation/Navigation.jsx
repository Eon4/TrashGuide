
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/logo.svg';
import style from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={style.nav}>
      <section>
        <div className={style.logo}>
          <img src='' alt='Logo' />
        </div>
        <ul>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
                };
              }}
            >
              Forside
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sorting'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
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
                  color: isActive ? 'red' : 'black',
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
                  color: isActive ? 'red' : 'black',
                };
              }}
            >
              Bestil Beholder
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
                };
              }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}



