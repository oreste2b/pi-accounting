import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import About from '@/components/About';
import Authority from '@/components/Authority';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Philosophy />
      <About />
      <Authority />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
