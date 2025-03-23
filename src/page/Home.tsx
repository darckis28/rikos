import Layout from "../layouts/Layout";
import Carta from "../sections/Carta";
import Hero from "../sections/Hero";
import Promos from "../sections/Promos";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="px-36">
        <Carta />
        <Promos />
      </div>
    </Layout>
  );
};
export default Home;
