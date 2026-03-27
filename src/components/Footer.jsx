import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Github, Heart } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 mt-auto">

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUMN 1 — Brand */}
        <div>
          <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-3">
            Vapopax Constructions
          </h2>
          <p className="text-sm leading-relaxed">
            Proudly South African. Building quality commercial and residential
            spaces across Gauteng since 2020.
          </p>
        </div>

        {/* COLUMN 2 — Quick Links */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 md:text-center">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm md:text-center">
            <li><Link to="/"           className="hover:text-emerald-400 transition">Home</Link></li>
            <li><Link to="/projects"   className="hover:text-emerald-400 transition">Projects</Link></li>
            <li><Link to="/about"      className="hover:text-emerald-400 transition">About Us</Link></li>
            <li><Link to="/services"   className="hover:text-emerald-400 transition">Services</Link></li>
            <li><Link to="/contact"    className="hover:text-emerald-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 — Contact Info */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 md:left-0 md:text-center">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm md:left-0 md:text-center">
            <li>📍 Pretoria, Gauteng</li>
            <li>📞 +27 (0) 12 000 0000</li>
            <li>✉️ info@vapopax.co.za</li>
          </ul>
        </div>

        {/* COLUMN 4 — Social Media */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a href="https://github.com/chaukz" target="_blank" rel="noreferrer"
               className="hover:text-emerald-400 transition">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/chaukz" target="_blank" rel="noreferrer"
               className="hover:text-emerald-400 transition">
              <Facebook size={20} />
            </a>
            <a href="https://github.com/chaukz" target="_blank" rel="noreferrer"
               className="hover:text-emerald-400 transition">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/chaukz" target="_blank" rel="noreferrer"
               className="hover:text-emerald-400 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800 text-center py-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Vapopax Constructions. All rights reserved.</p>
        <a
          href="https://github.com/chaukz"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 mt-2 hover:text-emerald-400 transition"
        >
          <Github size={14} />
          Built by chaukz <Heart size={14} className="text-red-500" />
        </a>
      </div>

    </footer>
  );
}