import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Computer, Brain } from "lucide-react";
import type { School, Course } from "@/data/education";

// Ícones que representam a área de cada curso (chave usada no campo "icon" do curso)
const courseIcons: Record<string, typeof Computer> = {
  computer: Computer,
  brain: Brain,
};

// Ícone do curso; usa um pato de borracha desenhado em linha quando "duck" é definido
const CourseIcon = ({ course }: { course: Course }) => {
  if (course.icon === "duck") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground shrink-0"
        aria-label="Pato de borracha"
      >
        <path d="M5.5 15.5c0-3.1 2.2-5.5 5.2-5.8V7.8c0-1.8 1.5-3.3 3.3-3.3 1.5 0 2.7 1 3.1 2.4.3-.1.7-.2 1-.2 1.2 0 2.2 1 2.2 2.2 0 .7-.3 1.3-.8 1.7 1.5 1 2.5 2.7 2.5 4.7 0 3.2-2.7 5.8-6 5.8h-5.3c-2.9 0-5.2-2.4-5.2-5.6Z" />
        <path d="M16.8 9.2c.8.1 1.7.4 2.4.9" />
        <path d="M17.5 7.2h1.2l1.3-.7-1.3 2" />
        <circle cx="16.8" cy="7.2" r=".45" fill="currentColor" stroke="none" />
        <path d="M5.7 14.1 3.2 13c-.7-.3-1.1-1-.8-1.7.3-.7 1-.9 1.7-.6l2.3 1" />
      </svg>
    );
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
  const [hoveredCourseLogo, setHoveredCourseLogo] = useState<string | null>(null);
  const isPuc = school.id === "pucpr";

  return (
    <div className="border border-separator p-6 md:p-8">
      <Link
        to={`/formacao/${school.id}`}
        className="flex items-start gap-4 group"
      >
        <GraduationCap size={28} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />

        {/* Título + logo da escola no hover */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-fit">
            <h2 className="text-xl md:text-2xl font-sans uppercase tracking-wide group-hover:text-accent transition-colors">
              {school.title}
            </h2>

            {school.logo && (
              <div
                className={`absolute ${
                  isPuc
                    ? "left-[calc(100%-2rem)] bottom-[calc(100%-2rem)]"
                    : "left-[calc(100%+4rem)] top-1/2 -translate-y-1/2"
                } w-48 sm:w-56 md:w-64 lg:w-80 max-h-[70vh] flex items-center justify-center pointer-events-none z-40 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
              >
                <img
                  src={school.logo}
                  alt={`${school.title} - Logo`}
                  className="w-full h-auto max-h-[70vh] object-contain shadow-2xl border border-border/40"
                />
              </div>
            )}
          </div>

          {school.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-3 py-1 border border-separator text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="space-y-3 mt-6 pl-0 md:pl-12">
        {school.courses.map((course) => {
          // Por convenção, a primeira imagem do curso é sua logo.
          const courseLogo = typeof course.images[0] === "string" ? course.images[0] : null;

          return (
            <Link
              key={course.id}
              to={`/formacao/${school.id}/${course.id}`}
              className="flex flex-wrap items-center gap-3"
            >
              <CourseIcon course={course} />
              <div
                className="relative w-fit"
                onMouseEnter={() => setHoveredCourseLogo(courseLogo)}
                onMouseLeave={() => setHoveredCourseLogo(null)}
              >
                <span className="text-base uppercase tracking-wide hover:text-accent transition-colors">
                  {course.title}
                </span>

                {courseLogo && (
                  <div
                    className="absolute left-[calc(100%+4rem)] top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-80 max-h-[70vh] flex items-center justify-center pointer-events-none z-40 opacity-0 translate-x-4 hover:opacity-100 hover:translate-x-0 transition-all duration-300"
                    style={{ opacity: hoveredCourseLogo === courseLogo ? undefined : undefined }}
                  >
                    {hoveredCourseLogo === courseLogo && (
                      <img
                        src={courseLogo}
                        alt={`${course.title} - Logo`}
                        className="w-full h-auto max-h-[70vh] object-contain shadow-2xl border border-border/40"
                      />
                    )}
                  </div>
                )}
              </div>

              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest px-3 py-1 border border-separator text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
