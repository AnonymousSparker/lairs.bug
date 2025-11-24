import { FadeIn, HoverCard } from "@/components/ui/animations";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    desc: "Real-time analytics dashboard using Next.js 14 and Firebase.",
    tags: ["Next.js", "Tailwind", "Recharts"],
    link: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    desc: "SaaS platform leveraging OpenAI API with streaming responses.",
    tags: ["TypeScript", "OpenAI", "Stripe"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio v1",
    desc: "The site you are currently viewing. High performance and accessibility.",
    tags: ["React Bits", "Next.js", "Framer Motion"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">Selected Work</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
          A collection of projects showcasing full-stack capabilities and interface design.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 0.1}>
            <HoverCard className="h-full">
              <div className="h-full border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-950 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                       <Github className="w-5 h-5 text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"/>
                       <ExternalLink className="w-5 h-5 text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"/>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded-md text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </HoverCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}