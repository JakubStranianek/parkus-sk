import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
export default function Home() {
  return (
    <main className="w-full bg-gray-50">
      <div className="w-11/12 m-auto lg:w-4/5">
        <Navbar />
        <Header />
        <About />
      </div>
    </main>
  )
}
