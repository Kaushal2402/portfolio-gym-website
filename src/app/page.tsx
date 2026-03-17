'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Membership from '@/components/Membership';
import Trainers from '@/components/Trainers';
import Classes from '@/components/Classes';
import Transformations from '@/components/Transformations';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Membership />
      <Trainers />
      <Classes />
      <Transformations />
      <FooterCTA />

      <Footer />
    </main>
  );
}
