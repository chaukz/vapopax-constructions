import { Link } from "react-router-dom";
import houseSample from "../assets/HouseSample.jpg";
import logo from "../assets/logo.png";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-screen">
      {/* BACKGROUND IMAGE */}
      <img
        src={houseSample}
        alt="Vapopax Constructions construction site"
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* LOGO PLACEHOLDER 
        <div className="w-full flex items-center justify-center mb-6">
          <img className="w-auto h-auto" src={logo} alt="" />
        </div>
        */}
        <h1 className="text-white text-4xl font-bold uppercase tracking-widest">
          <span className="block">Vapopax</span>
          <span className="block">Constructions</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-2 tracking-wide">
          Reliable. Affordable. Professional.
        </p>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mb-10">
          Proudly South African construction and property development —
          transforming residential and commercial spaces across Gauteng.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/projects"
            className="bg-emerald-400 text-black font-bold px-8 py-3 uppercase tracking-widest text-sm hover:bg-emerald-300 transition"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="border border-white text-white font-bold px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
