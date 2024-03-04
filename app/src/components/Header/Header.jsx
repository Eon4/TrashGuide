//Code is from an early assignment 
import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const Header = () => {
  // Defining an array of image URLs
  const imageUrls = [
    "http://localhost:3000/Assets/Images/Slideshow/malerspande.jpg",
    "http://localhost:3000/Assets/Images/Slideshow/affald-strand-2.jpg",
    "http://localhost:3000/Assets/Images/Slideshow/affald-skov-1.jpg",
  ];

   // State to keep track of the current index of the displayed image
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // State to control the fading effect during image transitions
   const [fade, setFade] = useState(false);
 
   // Effect to handle automatic image transition every 5 seconds
   useEffect(() => {
     // Set an interval for automatic image transition
     const intervalId = setInterval(() => {
       // Trigger the fading effect
       setFade(true);
 
       // After 1 second, update the current image index
       setTimeout(() => {
         setCurrentImageIndex((prevIndex) =>
           prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
         );
 
         // Disable the fading effect
         setFade(false);
       }, 1000);
     }, 5000);
 
     // Clear the interval when the component unmounts
     return () => clearInterval(intervalId);
   }, [imageUrls]);
 
   // Function to handle clicking on the previous arrow
   const handlePrevClick = () => {
     setCurrentImageIndex((prevIndex) =>
       prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
     );
   };
 
   // Function to handle clicking on the next arrow
   const handleNextClick = () => {
     setCurrentImageIndex((prevIndex) =>
       prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
     );
   };
 
   return (
     <div className={style.headerContainer}>
       {/* Left arrow for navigating to the previous image */}
       <BsArrowLeftCircle className={style.leftArrow} onClick={handlePrevClick} />
 
       {/* Container for the image with fading effect */}
       <div
         className={`${style.headerImage} ${fade ? style.fade : ""}`}
         style={{
           // Set the background image dynamically based on the current index
           backgroundImage: `url(${imageUrls[currentImageIndex]})`,
         }}
       />
 
       {/* Right arrow for navigating to the next image */}
       <BsArrowRightCircle className={style.rightArrow} onClick={handleNextClick} />
     </div>
   );
 };