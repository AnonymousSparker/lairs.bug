import { FadeIn, HoverCard } from "@/components/ui/animations";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const allProjects = [
  { id: 1, title: "Landing_Page", desc: "Real-time analytics dashboard using Next.js 14 and Firebase.", tags: ["HTML", "CSS", "UI/UX_Design"], link: "https://anonymoussparker.github.io/projects/gym-ride.html" },
  { id: 2, title: "Full_Stack_Blog_Site", desc: "A Full stacked website backed with firebase and Next.js", tags: ["Next.js", "Firebase", "tailwind"], link: "https://lairsbug-blogs.netlify.app" },
  { id: 3, title: "Portfolio_v1", desc: "The site you are currently viewing. High performance.", tags: ["React", "Next.js", "Framer"], link: "/" },
];

const ITEMS_PER_PAGE = 6;

export default async function Projects(props: { searchParams: Promise<{ page?: string }> }) {
  const params = await props.searchParams;
  const currentPage = Number(params.page) || 1;
  
  const totalItems = allProjects.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 font-mono">
      <FadeIn>
        <div className="border-l-4 border-[#5BC0BE] pl-6 mb-12">
          <h1 className="text-4xl font-bold text-[#0B132B] mb-2">
            ~/projects
          </h1>
          <p className="text-[#3A506B] max-w-2xl">
            // A collection of deployed executables and experiments. <br/>
            <span className="text-xs bg-[#0B132B] text-white px-2 py-1 mt-2 inline-block">
              Page {currentPage} of {totalPages}
            </span>
          </p>
        </div>
      </FadeIn>

      <div key={currentPage} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {currentProjects.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 0.05}>
            <HoverCard className="h-full">
              <div className="h-full border-2 border-[#e2e8f0] p-6 bg-white flex flex-col justify-between transition-all duration-300 hover:border-[#0B132B] hover:shadow-[8px_8px_0px_0px_#0B132B] group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-[#5BC0BE]" />
                        <h3 className="text-lg font-bold text-[#0B132B] group-hover:underline decoration-2 underline-offset-4 decoration-[#5BC0BE] select-none">
                            {project.title}
                        </h3>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.link}><ExternalLink className="w-5 h-5 text-[#3A506B] hover:text-[#0B132B] cursor-pointer transition-colors"/></a>
                    </div>
                  </div>
                  <p className="text-[#3A506B] mb-6 text-sm leading-relaxed border-l-2 border-[#e2e8f0] pl-3">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-bold px-2 py-1 bg-[#0B132B]/5 text-[#0B132B] border border-[#0B132B]/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </HoverCard>
          </FadeIn>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <FadeIn delay={0.2}>
          <div className="flex justify-center items-center gap-4">
            <Link
              href={currentPage > 1 ? `/pages/projects?page=${currentPage - 1}` : `/pages/projects?page=${currentPage}`}
              className={`p-3 border-2 transition-all
                ${currentPage > 1 
                  ? "border-[#0B132B] text-[#0B132B] hover:bg-[#0B132B] hover:text-white" 
                  : "border-[#e2e8f0] text-[#cbd5e1] cursor-not-allowed pointer-events-none"}`}
              aria-disabled={currentPage <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/pages/projects?page=${page}`}
                  className={`w-12 h-12 flex items-center justify-center text-sm font-bold border-2 transition-all
                    ${currentPage === page
                      ? "border-[#0B132B] bg-[#0B132B] text-white shadow-[4px_4px_0px_0px_#5BC0BE]"
                      : "border-[#e2e8f0] text-[#3A506B] hover:border-[#0B132B] hover:text-[#0B132B]"}`}
                >
                  {page}
                </Link>
              ))}
            </div>

            <Link
              href={currentPage < totalPages ? `/pages/projects?page=${currentPage + 1}` : `/pages/projects?page=${currentPage}`}
              className={`p-3 border-2 transition-all
                ${currentPage < totalPages 
                  ? "border-[#0B132B] text-[#0B132B] hover:bg-[#0B132B] hover:text-white" 
                  : "border-[#e2e8f0] text-[#cbd5e1] cursor-not-allowed pointer-events-none"}`}
              aria-disabled={currentPage >= totalPages}
            >
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      )}
    </div>
  );
}