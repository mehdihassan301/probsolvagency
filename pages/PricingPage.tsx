import React from 'react';
import { Page } from '../types';
import { pricingTiers } from '../components/constants';
import AnimatedCardBackground from '../components/AnimatedCardBackground';

interface PricingPageProps {
  setPage: (page: Page, id?: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ setPage }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-text_light dark:text-text_dark">Flexible Pricing Plans</h1>
        <p className="mt-4 text-base md:text-lg text-subtext_light dark:text-subtext_dark">
          Choose a plan that scales with your business needs. Transparent pricing for exceptional value.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier) => (
          <div key={tier.name} className={`relative rounded-xl p-8 flex flex-col transition-all duration-300 transform hover:scale-105 overflow-hidden ${
            tier.popular 
              ? 'border-2 border-primary bg-surface_light/90 dark:bg-surface_dark/90 shadow-2xl shadow-primary/20' 
              : 'border border-border_light dark:border-border_dark bg-surface_light/90 dark:bg-surface_dark/90 hover:shadow-xl hover:border-primary dark:hover:border-accent'
          }`}>
            <AnimatedCardBackground />
            {tier.popular && (
              <div className="absolute top-0 right-8 -mt-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase z-20">Most Popular</div>
            )}
            <div className="relative z-10 flex flex-col flex-grow">
              <h2 className="font-heading text-2xl font-bold text-text_light dark:text-text_dark">{tier.name}</h2>
              <p className="font-heading text-4xl font-extrabold text-text_light dark:text-text_dark mt-4">{tier.price}</p>
              <p className="text-subtext_light dark:text-subtext_dark mt-2 min-h-[60px]">{tier.description}</p>
              <div className="border-t border-border_light dark:border-border_dark my-6"></div>
              <ul className="space-y-4 text-text_light dark:text-text_dark flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border_light dark:border-border_dark my-6"></div>
              <p className="text-sm text-subtext_light dark:text-subtext_dark mb-6">Delivery: <span className="font-semibold text-text_light dark:text-text_dark">{tier.delivery}</span></p>
              <button
                onClick={() => setPage('ProjectBrief', tier.name)}
                className={`w-full py-3 font-bold rounded-lg transition-colors duration-300 ${
                tier.popular ? 'bg-primary text-white hover:bg-purple-600' : 'bg-border_light text-text_light hover:bg-gray-300 dark:bg-border_dark dark:text-text_dark dark:hover:bg-border_dark/50'
              }`}>
                {tier.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;