import Hero from '../components/Hero';
import About from '../components/About';
import Administration from '../components/Administration';
import Departments from '../components/Departments';
import Faculty from '../components/Faculty';
import Facilities from '../components/Facilities';
import Placements from '../components/Placements';
import Events from '../components/Events';
import News from '../components/News';
import Gallery from '../components/Gallery';
import Achievements from '../components/Achievements';
import Map from '../components/Map';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Administration />
      <Departments />
      <Faculty />
      <Facilities />
      <Placements />
      <News />
      <Events />
      <Gallery />
      <Achievements />
      <Map />
      <Contact />
    </>
  );
}

export default Home;
