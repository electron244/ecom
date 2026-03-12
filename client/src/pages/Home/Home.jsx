import Header from "../../components/Header";
import Hero from "../../components/Hero";
import FeaturedCollections from "../../components/FeaturedCollections";
import NewArrivals from "../../components/NewArrivals";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300 min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <NewArrivals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home