import Carta from "../sections/Carta";
import Hero from "../sections/Hero";
import Promos from "../sections/Promos";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="py-10 container mx-auto">
        <Carta />
        <Promos />
      </div>
    </>
  );
};
export default Home;
