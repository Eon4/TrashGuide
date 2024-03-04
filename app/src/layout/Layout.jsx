
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import './Layout.module.scss'

export function Layout() {
  return (
    <>
    <Navigation/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

