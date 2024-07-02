import Player from "../components/Player";
import PrimaryNavbar from "../components/PrimaryNavbar";
import SecondNavbar from "../components/SecondNavbar";
import Legal from "../components/Legal";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="fullScreen">
      <header className="nav">
        <Player />
        <PrimaryNavbar />
      </header>
      <section className="sectionH">
        <HeroSection />
      </section>
      <footer className="foot">
        <SecondNavbar />
        <Legal />
      </footer>
    </div>
  );
};

export default Home;
