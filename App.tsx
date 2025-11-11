<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Page, Theme } from './types';
import { Header } from './components/Header';
=======

import React, { useState, useEffect } from 'react';
import { Page, Theme } from './types';
import Navbar from './components/Navbar';
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
import AnimatedOrbs from './components/AnimatedOrbs';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './components/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CareersPage from './pages/CareersPage';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import BackToTopButton from './components/BackToTopButton';
<<<<<<< HEAD
import { serviceDetails, blogPosts, portfolioItems } from './components/constants';
=======
import { serviceDetails, blogPosts, portfolioItems, pricingTiers, jobOpenings } from './components/constants';
import LoadingSpinner from './components/LoadingSpinner';
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
import CaseStudyPage from './pages/CaseStudyPage';
import ProjectBriefPage from './pages/ProjectBriefPage';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('Home');
<<<<<<< HEAD
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  );
=======
  const [theme, setTheme] = useState<Theme>('dark');
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<string | null>(null);
  const [activePortfolioItem, setActivePortfolioItem] = useState<string | null>(null);
  const [activePlan, setActivePlan] = useState<string | null>(null);
<<<<<<< HEAD
=======
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
  const [isExiting, setIsExiting] = useState(false);


  useEffect(() => {
<<<<<<< HEAD
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navigateTo = (targetPage: Page, id?: string) => {
    // Prevent navigation if already transitioning or navigating to the same page without a new ID
    if (isExiting || (targetPage === page && !id && page !== 'ServiceDetail' && page !== 'BlogPost' && page !== 'CaseStudy' && page !== 'ProjectBrief')) {
=======
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // SEO Management
  useEffect(() => {
    const baseUrl = 'https://www.probsolv.online';
    const siteName = 'ProbSolv Tech Agency';
    const orgId = `${baseUrl}/#organization`;
    
    const updateMetaTags = (title: string, description: string, keywords: string, urlPath: string) => {
      const fullUrl = `${baseUrl}${urlPath}`;
      document.title = title;

      const updateTag = (id: string, content: string, isHref = false) => {
        const element = document.getElementById(id);
        if (element) {
          if (isHref) element.setAttribute('href', content);
          else element.setAttribute('content', content);
        }
      };

      updateTag('meta-description', description);
      updateTag('meta-keywords', keywords);
      updateTag('canonical-link', fullUrl, true);
      
      updateTag('og-title', title);
      updateTag('og-description', description);
      updateTag('og-url', fullUrl);

      updateTag('twitter-title', title);
      updateTag('twitter-description', description);
    };

    const updateSchema = (schema: object) => {
      const oldSchema = document.getElementById('page-specific-schema');
      if (oldSchema) oldSchema.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-specific-schema';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    let seoData = {
        title: `${siteName} | Web Development, Custom Apps & AI Automation`,
        description: `ProbSolv Tech Agency crafts high-performance websites, custom 'vibe coding' apps, and intelligent AI automations to scale your business. Let's build your digital future.`,
        keywords: 'web development, custom apps, ai automation, tech agency, vibe coding, business solutions',
        urlPath: '/',
        schema: {}
    };

    switch (page) {
      case 'Home':
        // Default SEO data is for Home page. Schema is WebPage.
        seoData.schema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${baseUrl}/#webpage`, "url": baseUrl, "name": seoData.title, "description": seoData.description, "isPartOf": { "@id": `${baseUrl}/#website` }};
        break;
      case 'Services':
        seoData = {
            title: `Our Services | ${siteName}`,
            description: 'Explore our expert services in Web Development, Vibe Coding Apps, and AI Business Automations. We build digital solutions that drive growth.',
            keywords: 'web development services, app development, ai consulting, modern tech stack, ui/ux design',
            urlPath: '/services',
            schema: {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Our Services",
                "description": "Our core service offerings.",
                "url": `${baseUrl}/services`,
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": serviceDetails.map((service, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": {
                            "@type": "Service",
                            "name": service.title,
                            "description": service.description,
                            "url": `${baseUrl}/services/${service.id}`
                        }
                    }))
                }
            }
        };
        break;
      case 'ServiceDetail':
        const service = serviceDetails.find(s => s.id === activeService);
        if (service) {
            seoData = {
                title: `${service.title} | Services | ${siteName}`,
                description: service.overview,
                keywords: `${service.title.toLowerCase()}, ${service.benefits.join(', ').toLowerCase()}`,
                urlPath: `/services/${service.id}`,
                schema: {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "@id": `${baseUrl}/services/${service.id}#service`,
                    "name": service.title,
                    "description": service.overview,
                    "provider": { "@id": orgId },
                    "serviceType": "ProfessionalService",
                    "mainEntityOfPage": `${baseUrl}/services/${service.id}`
                }
            };
        }
        break;
      case 'Pricing':
        seoData = {
            title: `Pricing Plans | ${siteName}`,
            description: 'Transparent pricing for web development, app creation, and AI automation. Find a plan that fits your business needs and budget.',
            keywords: 'website cost, app development pricing, ai automation costs, tech agency pricing',
            urlPath: '/pricing',
            schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Pricing Plans",
                "description": "Pricing plans for our services.",
                "url": `${baseUrl}/pricing`,
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": pricingTiers.map((tier, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": {
                            "@type": "Offer",
                            "name": tier.name,
                            "description": tier.description,
                            "price": tier.price.includes('$') ? tier.price.replace('$', '').replace(',', '') : '0',
                            "priceCurrency": "USD"
                        }
                    }))
                }
            }
        };
        break;
      case 'Portfolio':
        seoData = {
            title: `Our Work & Portfolio | ${siteName}`,
            description: 'Explore our portfolio of successful web development projects, vibe-coded apps, and AI automation solutions for various clients.',
            keywords: 'web design portfolio, tech agency projects, case studies, react websites, ai chatbots',
            urlPath: '/portfolio',
            schema: {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Portfolio",
              "url": `${baseUrl}/portfolio`
            }
        };
        break;
       case 'CaseStudy':
        const item = portfolioItems.find(p => p.id === activePortfolioItem);
        if (item) {
            seoData = {
                title: `Case Study: ${item.title} | ${siteName}`,
                description: item.challenge,
                keywords: `case study, ${item.category.toLowerCase()}, ${item.technologies.join(', ').toLowerCase()}`,
                urlPath: `/portfolio/${item.id}`,
                schema: {
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    "mainEntityOfPage": { "@type": "WebPage", "@id": `${baseUrl}/portfolio/${item.id}` },
                    "headline": `Case Study: ${item.title}`,
                    "description": item.challenge,
                    "image": `${baseUrl}${item.heroImage}`,
                    "author": { "@id": orgId },
                    "publisher": { "@id": orgId },
                    "datePublished": new Date().toISOString().split('T')[0],
                    "keywords": item.technologies.join(', ')
                }
            };
        }
        break;
      case 'Blog':
        seoData = {
            title: `ProbSolv Insights Blog | ${siteName}`,
            description: 'Expert analysis and articles on technology, design, AI, and the future of digital business from the ProbSolv team.',
            keywords: 'tech blog, ai articles, web development trends, programming tips, design philosophy',
            urlPath: '/blog',
            schema: {
                "@context": "https://schema.org",
                "@type": "Blog",
                "name": "ProbSolv Insights Blog",
                "url": `${baseUrl}/blog`,
                "publisher": { "@id": orgId },
                "blogPost": blogPosts.map(post => ({
                    "@type": "BlogPosting",
                    "mainEntityOfPage": `${baseUrl}/blog/${post.id}`,
                    "headline": post.title,
                    "author": { "@type": "Person", "name": post.author },
                    "datePublished": new Date(post.date).toISOString().split('T')[0]
                }))
            }
        };
        break;
      case 'BlogPost':
        const post = blogPosts.find(p => p.id === activePost);
        if (post) {
            seoData = {
                title: `${post.title} | ${siteName}`,
                description: post.excerpt,
                keywords: `${post.category}, ${post.title.toLowerCase().split(' ').join(', ')}`,
                urlPath: `/blog/${post.id}`,
                schema: {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": { "@type": "WebPage", "@id": `${baseUrl}/blog/${post.id}` },
                    "headline": post.title,
                    "description": post.excerpt,
                    "image": `${baseUrl}${post.image}`,
                    "author": { "@type": "Person", "name": post.author },
                    "publisher": { "@id": orgId },
                    "datePublished": new Date(post.date).toISOString().split('T')[0],
                    "articleBody": post.content.replace(/<[^>]*>?/gm, '')
                }
            };
        }
        break;
      case 'About':
        seoData = {
            title: `About ${siteName}`,
            description: 'Learn about our mission, philosophy, and the team dedicated to building the future of digital experiences.',
            keywords: 'about tech agency, our mission, company values, development team',
            urlPath: '/about',
            schema: { "@context": "https://schema.org", "@type": "AboutPage", "url": `${baseUrl}/about` }
        };
        break;
      case 'Contact':
        seoData = {
            title: `Contact Us | ${siteName}`,
            description: "Get in touch with ProbSolv to discuss your project. Let's build something great together. Request a free quote today.",
            keywords: 'contact tech agency, get a quote, project inquiry, business contact',
            urlPath: '/contact',
            schema: { "@context": "https://schema.org", "@type": "ContactPage", "url": `${baseUrl}/contact` }
        };
        break;
      case 'Careers':
        seoData = {
            title: `Careers at ${siteName}`,
            description: 'Join our team of innovators. Explore open positions in frontend engineering, AI/ML, and UI/UX design.',
            keywords: 'tech jobs, remote developer jobs, ai engineer jobs, ui/ux designer jobs',
            urlPath: '/careers',
            schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Careers",
                "url": `${baseUrl}/careers`,
                "mainEntity": jobOpenings.map(job => ({
                    "@type": "JobPosting",
                    "title": job.title,
                    "description": `<p>${job.description}</p><h4>Responsibilities</h4><ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul><h4>Qualifications</h4><ul>${job.qualifications.map(q => `<li>${q}</li>`).join('')}</ul>`,
                    "hiringOrganization": { "@id": orgId },
                    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": job.location } },
                    "employmentType": job.type.toUpperCase().replace('-', '_')
                }))
            }
        };
        break;
      case 'PrivacyPolicy':
        seoData = {
            title: `Privacy Policy | ${siteName}`,
            description: 'Read the Privacy Policy for ProbSolv Tech Agency. Understand how we collect, use, and protect your personal information.',
            keywords: 'privacy policy, data protection, user data',
            urlPath: '/privacy-policy',
            schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Privacy Policy", "url": `${baseUrl}/privacy-policy` }
        };
        break;
      case 'TermsOfService':
        seoData = {
            title: `Terms of Service | ${siteName}`,
            description: 'Read the Terms of Service for using the ProbSolv Tech Agency website and services.',
            keywords: 'terms of service, terms and conditions, user agreement',
            urlPath: '/terms-of-service',
            schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Terms of Service", "url": `${baseUrl}/terms-of-service` }
        };
        break;
      default:
        // Use default home page SEO
        break;
    }
    
    updateMetaTags(seoData.title, seoData.description, seoData.keywords, seoData.urlPath);
    if(Object.keys(seoData.schema).length > 0) {
        updateSchema(seoData.schema);
    }

  }, [page, activeService, activePost, activePortfolioItem, activePlan]);


  const navigateTo = (targetPage: Page, id?: string) => {
    // Prevent navigation if already transitioning or navigating to the same page without a new ID
    if (isLoading || isExiting || (targetPage === page && !id && page !== 'ServiceDetail' && page !== 'BlogPost' && page !== 'CaseStudy' && page !== 'ProjectBrief')) {
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
        if (!id) window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
<<<<<<< HEAD
    setIsExiting(true);

    // After fade-out animation (250ms)
=======
    setIsLoading(true);
    setIsExiting(true);

    // After fade-out animation (300ms)
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
    setTimeout(() => {
        setActiveService(null);
        setActivePost(null);
        setActivePortfolioItem(null);
        setActivePlan(null);

        if (targetPage === 'ServiceDetail' && id) {
          setActiveService(id);
        }
        if (targetPage === 'BlogPost' && id) {
          setActivePost(id);
        }
        if (targetPage === 'CaseStudy' && id) {
          setActivePortfolioItem(id);
        }
        if (targetPage === 'ProjectBrief' && id) {
            setActivePlan(id);
        }

        setPage(targetPage);
<<<<<<< HEAD
        window.scrollTo(0, 0); // Instantly scroll to top for new page
        setIsExiting(false); // Page has changed, ready for fade-in animation
    }, 250); // Must match the fade-out animation duration
=======
        window.scrollTo({ top: 0, behavior: 'auto' }); // Instantly go to top for new page
        setIsExiting(false); // Page has changed, ready for fade-in animation

        // Hide spinner after it has animated and new page has started fading in
        setTimeout(() => {
            setIsLoading(false);
        }, 800); // Corresponds to the spinner's animation duration
    }, 300); // Must match the fade-out animation duration
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
  };

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage setPage={navigateTo} />;
      case 'Services':
        return <ServicesPage setPage={navigateTo} />;
      case 'ServiceDetail':
        const service = serviceDetails.find(s => s.id === activeService);
        return service ? <ServiceDetailPage service={service} setPage={navigateTo} /> : <ServicesPage setPage={navigateTo} />;
      case 'Pricing':
        return <PricingPage setPage={navigateTo} />;
      case 'Portfolio':
        return <PortfolioPage setPage={navigateTo} />;
      case 'About':
        return <AboutPage />;
      case 'Testimonials':
        return <TestimonialsPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Blog':
        return <BlogPage setPage={navigateTo} />;
      case 'BlogPost':
        const post = blogPosts.find(p => p.id === activePost);
        return post ? <BlogPostPage post={post} setPage={navigateTo} /> : <BlogPage setPage={navigateTo} />;
      case 'CaseStudy':
        const item = portfolioItems.find(p => p.id === activePortfolioItem);
        return item ? <CaseStudyPage item={item} setPage={navigateTo} /> : <PortfolioPage setPage={navigateTo} />;
      case 'ProjectBrief':
        return activePlan ? <ProjectBriefPage planName={activePlan} setPage={navigateTo} /> : <PricingPage setPage={navigateTo} />;
      case 'PrivacyPolicy':
        return <PrivacyPolicyPage />;
      case 'TermsOfService':
        return <TermsOfServicePage />;
      case 'Careers':
        return <CareersPage setPage={navigateTo} />;
      default:
        return <HomePage setPage={navigateTo} />;
    }
  };

  return (
    <div className="font-sans text-text_light dark:text-text_dark min-h-screen bg-400% bg-gradient-animated-light dark:bg-gradient-animated-dark animate-gradient-bg">
<<<<<<< HEAD
      <AnimatedOrbs theme={theme} />
      <div className="relative z-10">
        <Header setPage={navigateTo} theme={theme} setTheme={setTheme} />
        <main className="overflow-x-hidden pt-24">
          <div key={`${page}-${activeService}-${activePost}-${activePortfolioItem}-${activePlan}`} className={`will-change-opacity ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`}>
=======
      <LoadingSpinner isLoading={isLoading} />
      <AnimatedOrbs theme={theme} />
      <div className="relative z-10">
        <Navbar currentPage={page} setPage={navigateTo} theme={theme} setTheme={setTheme} />
        <main className="overflow-x-hidden">
          <div key={`${page}-${activeService}-${activePost}-${activePortfolioItem}-${activePlan}`} className={isExiting ? 'animate-fade-out' : 'animate-fade-in'}>
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
            {renderPage()}
          </div>
        </main>
        <Footer setPage={navigateTo} />
      </div>
      <CookieConsentBanner setPage={navigateTo} />
      <BackToTopButton />
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 780d8b4aa680c1b00773824e7f17a326e226323e
