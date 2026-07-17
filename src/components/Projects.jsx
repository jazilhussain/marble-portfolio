
import villa from "../assets/projects/villa.jpg";
import kitchen from "../assets/projects/kitchen.jpg";
import bathroom from "../assets/projects/bathroom.jpg";
import commercial from "../assets/projects/commercial.jpg";
import staircase from "../assets/projects/staircase.jpg";
import installation from "../assets/projects/installation.jpg";

const projects = [
  {
    title: "Luxury Villas",
    image: villa,
  },
  {
    title: "Modern Kitchens",
    image: kitchen,
  },
  {
    title: "Bathroom Interiors",
    image: bathroom,
  },
  {
    title: "Commercial Projects",
    image: commercial,
  },
  {
    title: "Staircase Designs",
    image: staircase,
  },
  {
    title: "Custom Installations",
    image: installation,
  },
];

function Projects() {
  return (
    <section id="projects" data-aos="fade-left" className="bg-[#111111] text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

       <div className="text-center mb-16">
  <p className="text-yellow-600 uppercase tracking-[4px] mb-4">
    Our Projects
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Recent Marble Projects
  </h2>

  <div className="flex justify-center">
    <p className="text-gray-400 text-lg leading-8 w-full md:w-[700px]">
      Explore some of our premium marble installations
      and luxury interior projects.
    </p>
  </div>
</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="
        bg-[#1a1a1a]
        rounded-3xl
        overflow-hidden
        border border-gray-800
        hover:border-yellow-600
        transition-all duration-500
        hover:-translate-y-2
      "
    >
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            hover:scale-110
            transition-all
            duration-700
          "
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400">
          Premium marble project with elegant craftsmanship and luxury finishes.
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default Projects;