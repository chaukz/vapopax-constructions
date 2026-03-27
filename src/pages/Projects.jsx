import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import house2 from "../assets/house2.jpg";


const categories = ["All", ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-zinc-950 min-h-screen text-white">

      {/* PAGE HEADER — background image with overlay */}
      <div className="relative py-16 text-center overflow-hidden">
        <img
          src={house2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-3">
            Our Projects
          </h1>
          <p className="text-gray-400 text-sm">
            Delivering quality construction across Gauteng
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* SEARCH + FILTER BAR */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-zinc-900 text-white border border-zinc-700 rounded-lg px-4 py-2 text-sm w-full md:w-72 focus:outline-none focus:border-emerald-400"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition
                  ${activeCategory === cat
                    ? "bg-emerald-500 text-white"
                    : "bg-zinc-900 text-gray-400 hover:bg-zinc-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p className="text-gray-500 text-sm mb-6">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* PROJECT GRID */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No projects found for "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-4 text-emerald-400 hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
        <hr className="border-t border-zinc-800 mt-12" />
      </div>
    </div>
  );
}