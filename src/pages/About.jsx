import { Shield, Star, Clock, Users, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house6 from "../assets/house6.jpg";


const values = [
  { icon: <Shield size={28} />, title: "Integrity", desc: "We operate with full transparency and honesty in every project we undertake." },
  { icon: <Star size={28} />, title: "Quality", desc: "We never compromise on materials, workmanship or the standards we deliver." },
  { icon: <Clock size={28} />, title: "Reliability", desc: "Deadlines matter. We show up, we deliver, and we keep our word." },
  { icon: <Users size={28} />, title: "Professionalism", desc: "Every interaction, on site or off, reflects the standard of Vapopax Constructions." },
  { icon: <Lightbulb size={28} />, title: "Innovation", desc: "We embrace modern techniques and forward-thinking solutions in construction." },
  { icon: <Award size={28} />, title: "Excellence", desc: "Good enough is never enough. We pursue excellence in everything we build." },
];

export default function About() {
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
      About Us
    </h1>
    <p className="text-gray-400 text-sm">
      Built on integrity. Driven by excellence.
    </p>
  </div>
</div>

      {/* STORY SECTION — text left, image right */}
      {/* md:grid-cols-2 = two columns on desktop, stacked on mobile */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Our Story
          </p>
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Building Gauteng's Future, One Project at a Time
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Vapopax Constructions was founded with a single mission — to bring world-class
            construction standards to Gauteng. As an ambitious and forward-thinking
            company, we are committed to delivering premium residential and commercial
            spaces that stand the test of time.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Though we are an up-and-coming company, our team brings a wealth of
            industry knowledge, technical expertise and an unrelenting drive to
            exceed client expectations on every project we take on.
          </p>
        </div>

        {/* PLACEHOLDER IMAGE — replace with real photo from client */}
        <div className="relative h-80 rounded-lg overflow-hidden grayscale ">
          <img
            src={house6}
            alt="Vapopax Constructions construction"
            className="w-full h-full object-cover"
          />
          
        </div>

      </div>

      {/* MISSION & VISION — two cards side by side */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

         <div className="border border-emerald-400 rounded-lg p-8 group hover:border-emerald-600 transition-colors duration-300">
  <p className="text-emerald-400 group-hover:text-emerald-600 text-sm uppercase tracking-widest font-semibold mb-3 transition-colors duration-300">
    Our Mission
  </p>
  <p className="text-gray-300 leading-relaxed">
    To deliver high-quality, reliable and innovative construction solutions
    that transform spaces and improve lives across Gauteng and beyond —
    while building lasting relationships with every client we serve.
  </p>
</div>

<div className="border border-emerald-400 rounded-lg p-8 group hover:border-emerald-600 transition-colors duration-300">
  <p className="text-emerald-400 group-hover:text-emerald-600 text-sm uppercase tracking-widest font-semibold mb-3 transition-colors duration-300">
    Our Vision
  </p>
  <p className="text-gray-300 leading-relaxed">
    To be the most trusted and respected construction company in Gauteng,
    known for our premium standards, professional team and commitment to
    building a better future for our communities.
  </p>
</div>

        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
            What We Stand For
          </p>
          <h2 className="text-3xl font-bold">Our Core Values</h2>
        </div>

        {/* grid-cols-3 on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {values.map((v, index) => (
    <div
      key={index}
      className="group bg-zinc-900 border border-emerald-400 rounded-lg p-6 hover:border-emerald-600 transition-colors duration-300"
    >
      <div className="text-emerald-400 group-hover:text-emerald-600 transition-colors duration-300 mb-4">
        {v.icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
    </div>
  ))}
</div>

      </div>

      {/* CTA BANNER */}
      <div className="relative py-16 text-center overflow-hidden">
  <img
    src={house3}
    alt=""
    className="absolute inset-0 w-full h-full object-cover grayscale"
  />
  <div className="absolute inset-0 bg-black/70" />
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-4">Ready to Build With Us?</h2>
    <p className="text-emerald-100 mb-8 text-sm">
      Let's discuss your next project and bring your vision to life.
    </p>
    <Link
      to="/contact"
      className="bg-white text-black font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-gray-100 transition"
    >
      Get In Touch
    </Link>
  </div>
</div>

    </div>
  );
}