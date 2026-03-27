import { MapPin, Calendar, DollarSign } from "lucide-react";

// PROPS — data passed in from the parent (like function arguments)
// When Projects.jsx renders <ProjectCard project={p} />
// we destructure it here as { project }
export default function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">

      {/* IMAGE */}
      {/* overflow-hidden on parent + scale on child = zoom effect on hover */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* CATEGORY BADGE — sits on top of the image */}
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      {/* CARD BODY */}
      <div className="p-5">

        {/* TITLE */}
        <h3 className="text-white font-bold text-lg mb-3">
          {project.title}
        </h3>

        {/* META INFO — location, year, value */}
        <div className="flex flex-col gap-2 text-gray-400 text-sm">

          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-emerald-400" />
            <span>{project.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-emerald-400" />
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign size={14} className="text-emerald-400" />
            <span>{project.value}</span>
          </div>

        </div>
      </div>

    </div>
  );
}