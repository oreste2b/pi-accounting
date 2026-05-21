import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Authority from '@/components/Authority';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Authority />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
