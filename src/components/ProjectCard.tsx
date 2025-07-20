import type { Technology } from "../types/Project.types";

type ProjectCardProps = {
  img?: string;
  title?: string;
  description?: string;
  technologies?: Technology[];
};

function ProjectCard({ img, title = "Project", description, technologies }: ProjectCardProps) {
  return (
    <div className="flex flex-col h-full sm:h-90 m-4 bg-white p-4 rounded-2xl shadow-md transform transition-transform duration-400 hover:scale-105 hover:shadow-xl hover:cursor-pointer">
      {img && <img
        className="w-full h-40 object-cover rounded-md mb-2"
        src={img}
        alt={title} />}

      <p className="text-xl font-bold mt-2">{title}</p>

      <p className="text-gray-700 mb-2">{description}</p>

      <ul className="flex flex-wrap gap-2 mt-2">
        {technologies?.map((tec, index) => (
          <li
            key={index}
            className="px-2 py-1 text-sm text-white rounded-full"
            style={{ backgroundColor: tec.color, fontWeight: "bold" }}>
            {tec.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
