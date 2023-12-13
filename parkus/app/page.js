import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className="w-full bg-gray-50">
      <div className="w-11/12 m-auto lg:w-4/5">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Banner />
        <Reviews />
        <Contact />
      </div>
    </main>
  )
}
