import Layout from "../layouts/Layout";
import Carta from "../sections/Carta";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="px-36">
        <Carta />
      </div>
    </Layout>
  );
};
export default Home;
