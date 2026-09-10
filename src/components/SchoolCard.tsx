import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Computer } from "lucide-react";
import type { School, Course } from "@/data/education";

// Ícones que representam a área de cada curso (chave usada no campo "icon" do curso)
const courseIcons: Record<string, typeof Computer> = {
  computer: Computer,
};

// Ícone do curso; usa um pato de borracha quando "duck" é definido
const CourseIcon = ({ course }: { course: Course }) => {
  if (course.icon === "duck") {
    return <span className="text-base leading-none shrink-0" aria-label="Pato de borracha">🦆</span>;
  }

  const Icon = course.icon ? courseIcons[course.icon] : null;
  if (!Icon) {
    return <span className="text-muted-foreground">→</span>;
  }
  return <Icon size={16} className="text-muted-foreground shrink-0" />;
};

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="border border-separator p-6 md:p-8">
      <Link
        to={`/formacao/${school.id}`}
        className="flex items-start gap-4 group"
        onMouseEnter={() => setHoveredImage(school.hoverImage || school.coverImage)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <GraduationCap size={28} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
        <div className="flex-1 flex flex-wrap items-center gap-3">
          <h2 className="text-xl md:text-2xl font-sans uppercase tracking-wide group-hover:text-accent transition-colors">
            {school.title}
          </h2>
          {school.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-3 py-1 border border-separator text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs uppercase tracking-widest text-muted-foreground ml-auto">
            {school.year}
          </span>
        </div>
      </Link>

      <div className="space-y-3 mt-6 pl-0 md:pl-12">
        {school.courses.map((course) => (
          <Link
            key={course.id}
            to={`/formacao/${school.id}/${course.id}`}
            className="flex flex-wrap items-center gap-3 group/course"
            onMouseEnter={() => setHoveredImage(course.hoverImage || course.coverImage)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex w-full items-center gap-3">
              <CourseIcon course={course} />
              <span className="flex-1 text-base uppercase tracking-wide group-hover/course:text-accent transition-colors">
                {course.title}
              </span>
              {course.year && (
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {course.year}
                </span>
              )}
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 pl-7">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest px-3 py-1 border border-separator text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Floating hover image */}
      <div
        className={`fixed right-8 lg:right-32 top-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-96 lg:w-[28rem] max-h-[75vh] flex items-center justify-end pointer-events-none z-40 transition-all duration-300 ${
          hoveredImage ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt=""
            className="w-full h-auto max-h-[75vh] object-contain shadow-2xl border border-border/40"
          />
        )}
      </div>
    </div>
  );
}