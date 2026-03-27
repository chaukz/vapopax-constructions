import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 text-white w-full">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-1xl font-bold tracking-widest uppercase text-white-400">
            Vapopax Constructions
        </Link>

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <li><Link to="/" className="hover:text-emerald-400 transition">Home</Link></li>
          <li><Link to="/projects" className="hover:text-emerald-400 transition">Projects</Link></li>
          <li><Link to="/about" className="hover:text-emerald-400 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-emerald-400 transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm uppercase tracking-wider">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}

    </nav>
  );
}