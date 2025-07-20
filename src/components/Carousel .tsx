import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../types/Project.types";

type CarouselProps = {
  items: Project[];
};

function Carousel({ items }: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const maxVisible = 3;

  const next = () => {
    if (startIndex + maxVisible < items.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center gap-4">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="hidden sm:block text-white bg-[#128DF7] px-3 py-2 rounded-full disabled:opacity-30 transition"
          disabled={startIndex === 0}
        >
          ◀
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${startIndex * (100 / maxVisible)}%)`, width: `${(items.length / maxVisible) *  56}%`,}}>
            {items.map((project, index) => (
              <div key={index} className="min-w-[calc(100%)] p-2 m-1">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    technologies={project.technologies}
                  />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="hidden sm:block text-white bg-[#128DF7] px-3 py-2 rounded-full disabled:opacity-30 transition"
          disabled={startIndex + maxVisible >= items.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Carousel;
