
import React, { useRef, useEffect } from 'react';
import { Page } from '../types';
import { AIIcon, WebDevIcon, VibeCodeIcon, ArrowRightIcon } from '../components/Icons';
import { portfolioItems, serviceDetails } from '../components/constants';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedCardBackground from '../components/AnimatedCardBackground';

interface HomePageProps {
  setPage: (page: Page, id?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  const particleRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const featuredProjects = portfolioItems.slice(0, 3);
  const featuredServices = serviceDetails.slice(0, 3);
  
  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.pageYOffset;
      if (particleRef.current) {
        // Apply a parallax effect by moving the background at a faster speed
        particleRef.current.style.transform = `translateY(${offsetY * 0.5}px)`;
      }
      if (heroContentRef.current) {
        // Move hero content slower to create depth
        heroContentRef.current.style.transform = `translateY(${offsetY * 0.3}px)`;
        // Fade out content as it scrolls up
        heroContentRef.current.style.opacity = `${Math.max(0, 1 - offsetY / 400)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whyChooseUsItems = [
    {
      icon: WebDevIcon,
      title: 'Modern & Reliable Tech',
      description: 'We use the latest, most reliable technologies to build solutions that are fast, secure, and future-proof.',
    },
    {
      icon: VibeCodeIcon,
      title: 'User-Centric Design',
      description: 'Our design philosophy puts the user first, resulting in intuitive, beautiful, and enjoyable digital experiences.',
    },
    {
      icon: AIIcon,
      title: 'Results-Driven Solutions',
      description: 'We focus on building practical tools that solve real-world business problems and deliver measurable results.',
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div ref={particleRef} className="absolute top-0 left-0 w-full h-full z-0 transition-transform duration-100 ease-out will-change-transform">
          <ParticleBackground type="network" />
        </div>
        <div ref={heroContentRef} className="relative z-10 max-w-4xl animate-fade-in-up transition-opacity duration-100 ease-out will-change-transform">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-text_light dark:text-white leading-tight drop-shadow-lg animate-pulse-text" style={{ animationDuration: '4s' }}>
            ProbSolv Tech Agency
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-primary dark:text-accent font-medium tracking-wider drop-shadow-lg">
            <span>Web Development • Vibe Coding Apps</span>
            <span className="block sm:inline"> • AI Automations</span>
          </p>
          <p className="mt-8 max-w-2xl mx-auto text-subtext_light dark:text-gray-300 text-base md:text-xl drop-shadow-lg">
            We Create Automated Systems That Scale Your Business.
          </p>
          <button
            onClick={() => setPage('Services')}
            className="mt-10 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-primary text-white font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text_light dark:text-text_dark mb-6">Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-subtext_light dark:text-subtext_dark leading-relaxed">
              ProbSolv builds modern digital solutions—from business websites to vibe-coded apps and AI automation. We help brands scale using smart technology, clean UI, and automated workflows. Our passion is turning complex problems into elegant, effective digital systems that empower your business to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why ProbSolv Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-bg_light dark:bg-surface_dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text_light dark:text-text_dark mb-12">Why Choose ProbSolv?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUsItems.map((item) => (
              <div key={item.title} className="group flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-12deg]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary dark:text-accent mb-2">{item.title}</h3>
                <p className="text-subtext_light dark:text-subtext_dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text_light dark:text-text_dark mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setPage('ServiceDetail', service.id)}
                className="relative group bg-surface_light/90 dark:bg-surface_dark/90 border border-border_light dark:border-border_dark rounded-xl p-8 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary dark:hover:border-accent flex flex-col items-start overflow-hidden"
              >
                <AnimatedCardBackground />
                <div className="relative z-10 flex flex-col items-start flex-grow">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white flex-shrink-0">
                    <service.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-12deg]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text_light dark:text-text_dark mb-2">{service.title}</h3>
                  <p className="text-subtext_light dark:text-subtext_dark mb-6 flex-grow">{service.description}</p>
                  <div className="mt-auto font-semibold text-primary dark:text-accent inline-flex items-center">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-bg_light dark:bg-surface_dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text_light dark:text-text_dark mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-w-4 aspect-h-3">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                    <p className="text-accent text-sm">{item.category}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <button
                            onClick={() => setPage('CaseStudy', item.id)}
                            className="font-semibold text-white bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-md hover:bg-primary"
                        >
                            View Case Study
                        </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPage('Portfolio')}
            className="mt-12 px-8 py-3 bg-border_light dark:bg-border_dark/50 text-text_light dark:text-text_dark font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-border_dark"
          >
            View Full Portfolio
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text_light dark:text-text_dark mb-12">What Our Clients Say</h2>
          <TestimonialsCarousel />
        </div>
      </section>
    </>
  );
};

export default HomePage;
