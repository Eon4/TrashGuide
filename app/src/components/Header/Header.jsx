//Code is from an early assignment 
import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import MalerspandHeader from '../../assets/image/Slideshow/malerspande.jpg'
import Affald01Header from '../../assets/image/Slideshow/affaldskov01.jpg'
import Affald02Header from '../../assets/image/Slideshow/affaldstrand02.jpg'

export const Header = () => {
  const images = [
    MalerspandHeader,
    Affald01Header,
    Affald02Header,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );

        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={style.headerContainer}>
      <BsArrowLeftCircle className={style.leftArrow} onClick={handlePrevClick} />
      <div
        className={`${style.headerImage} ${fade ? style.fade : ""}`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />
      <BsArrowRightCircle className={style.rightArrow} onClick={handleNextClick} />
    </div>
  );
};
