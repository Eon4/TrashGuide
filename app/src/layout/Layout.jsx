
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { Hero } from '../components/Hero/Hero';
import './Layout.module.scss'

export function Layout() {
  return (
    <>
    <Navigation/>
    <Hero/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

