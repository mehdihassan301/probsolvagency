import React from 'react';
import { Page } from '../types';

interface LogoProps {
  setPage?: (page: Page) => void;
  className?: string;
  isScrolled?: boolean;
}

const LogoContent: React.FC<{ isScrolled?: boolean }> = ({ isScrolled }) => (
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 120 28" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-label="ProbSolv"
    className="overflow-visible"
    preserveAspectRatio="xMinYMid meet"
  >
    <style>
      {`
        .logo-text {
<<<<<<< HEAD
          transition: letter-spacing 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .logo-solv {
          transition: fill 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .logo-dot {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
=======
          transition: letter-spacing 0.4s ease-in-out;
        }
        .logo-solv {
          transition: fill 0.4s ease-in-out;
        }
        .logo-dot {
          transition: transform 0.4s ease-in-out;
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
        }
      `}
    </style>
    <text 
      x="0" 
      y="22" 
      fontFamily="Inter, sans-serif" 
      fontWeight="800" 
      fontSize="24" 
      className="logo-text"
      style={{ letterSpacing: isScrolled ? '-1px' : '0px' }}
    >
      <tspan className="text-text_light dark:text-text_dark fill-current">Prob</tspan>
      <tspan 
<<<<<<< HEAD
        className={`logo-solv text-text_light dark:text-text_dark fill-current ${isScrolled ? 'animate-logo-text-glow' : ''}`}
=======
        className="logo-solv text-text_light dark:text-text_dark fill-current"
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
        style={{ fill: isScrolled ? 'var(--color-primary)' : '' }}
      >
        Solv
      </tspan>
    </text>
    <circle 
      cx="114"
      cy="21" 
      r="4" 
<<<<<<< HEAD
      className="logo-dot text-primary dark:text-accent fill-current animate-logo-dot-glow"
=======
      className="logo-dot text-primary dark:text-accent fill-current"
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
      style={{ transform: isScrolled ? 'translateX(-54px)' : 'translateX(0px)' }}
    />
  </svg>
);


const Logo: React.FC<LogoProps> = ({ setPage, className = '', isScrolled }) => {
    const containerClasses = `h-7 transition-all duration-400 ease-in-out ${isScrolled ? 'w-[90px] sm:w-[105px]' : 'w-[105px] sm:w-[120px]'}`;
    
    if (setPage) {
        return (
            <button
                onClick={() => setPage('Home')}
                className={`focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${className} ${containerClasses}`}
                aria-label="ProbSolv Home"
            >
                <LogoContent isScrolled={isScrolled} />
            </button>
        );
    }
    return (
        <div className={`${className} ${containerClasses}`}>
            <LogoContent isScrolled={isScrolled} />
        </div>
    );
};

<<<<<<< HEAD
export default Logo;
=======
export default Logo;
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
