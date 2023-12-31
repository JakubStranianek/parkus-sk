import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="w-full bg-gray-50">
      <div className="w-11/12 m-auto lg:w-4/5">
        <Navbar />
      </div>
        <Header />
        <div className="w-11/12 m-auto lg:w-4/5">
        <About />
        <Services />
        <Banner />
        <Reviews />
        <Contact />
        <Footer />
        </div>
    </main>
  )
}
