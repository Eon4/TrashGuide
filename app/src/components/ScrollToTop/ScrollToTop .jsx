//Inspiration for Scroll To Top component: https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowCircleUp } from 'react-icons/fa';
import style from './ScrollToTop.module.scss'; 

// Component for the ScrollToTop functionality
const ScrollToTop = () => {
  // Here we get the current pathname from the location hook of React Router
  const { pathname } = useLocation();

  // Effect to scroll to the top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Render a div with the scrollToTop class that, when clicked, triggers the scrollToTop function
  return (
    <div className={style.scrollToTop} onClick={scrollToTop}>
      <FaArrowCircleUp />
    </div>
  );
};

export default ScrollToTop;

