import Layout from "../layouts/Layout";
import Carta from "../sections/Carta";
import Hero from "../sections/Hero";
import Promos from "../sections/Promos";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="py-10 container mx-auto">
        <Carta />
        <Promos />
      </div>
    </Layout>
  );
};
export default Home;
