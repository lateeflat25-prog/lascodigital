import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import ResultsMetrics from '@/components/ResultsMetrics';
import SocialPortfolio from '@/components/SocialPortfolio';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <ResultsMetrics />
      <SocialPortfolio />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}