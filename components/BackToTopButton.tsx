import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';
<<<<<<< HEAD
import { smoothScrollTo } from '../utils/smoothScroll';
=======
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
<<<<<<< HEAD
    smoothScrollTo(0, 800);
=======
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-4 sm:left-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};

<<<<<<< HEAD
export default BackToTopButton;
=======
export default BackToTopButton;
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
