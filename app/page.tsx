import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="">
      <div className="bg-slate-50">
      <Navbar />
      <Hero />
      </div>
      <GetStarted />

      
    </main>
  )
}
