import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Signature from "./components/Signature";
import Stats from "./components/Stats";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain relative">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Story />
          <Menu />
          <Signature />
          <Stats />
          <Reservation />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
