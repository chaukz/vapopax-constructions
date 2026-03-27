import { Link } from "react-router-dom";
import { Home, Building2, Wrench, CheckCircle } from "lucide-react";
import house2 from "../assets/house2.jpg";

const services = [
  {
    icon: <Home size={32} />,
    title: "Residential Construction",
    desc: "From single dwellings to full residential estates — we build homes that are structurally sound, beautifully finished and built to last."
  },
  {
    icon: <Building2 size={32} />,
    title: "Commercial Construction",
    desc: "Offices, retail spaces, warehouses and more. We deliver commercial builds on time, on budget and to the highest specifications."
  },
  {
    icon: <Wrench size={32} />,
    title: "Renovations & Refurbishments",
    desc: "Breathing new life into existing spaces. Whether it's a full interior overhaul or targeted upgrades, we handle it all."
  },
];

const reasons = [
  "CIDB registered and fully compliant",
  "Experienced team with proven industry knowledge",
  "On-time delivery with transparent communication",
  "Premium materials and modern construction methods",
  "Dedicated project manager for every build",
  "Competitive pricing without compromising quality",
];

export default function PlantHire() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* PAGE HEADER */}
      <div className="relative py-16 text-center overflow-hidden">
        <img
          src={house2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-3">
            Our Services
          </h1>
          <p className="text-gray-400 text-sm">
            Comprehensive construction solutions across Gauteng
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold">Built For Every Need</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-emerald-400 rounded-lg p-6 hover:border-emerald-600 transition-colors duration-300"
            >
              <div className="text-emerald-400 group-hover:text-emerald-600 transition-colors duration-300 mb-4">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
              Why Vapopax Constructions
            </p>
            <h2 className="text-3xl font-bold">The Vapopax Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm">{reason}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA BANNER */}
      <div className="relative py-16 text-center overflow-hidden">
        <img
          src={house2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 text-sm">
            Get in touch today and let's discuss what we can build together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <hr className="border-t border-gray-800" />

    </div>
  );
}