import Link from "next/link";
import { ArrowRight, Code2, Palette, Database } from "lucide-react";
import { FadeIn, SlideInLeft, HoverCard } from "@/components/ui/animations";

export default function Home() {
  const skills = ["Next.js 16", "TypeScript", "Tailwind CSS", "Firebase", "React", "AI Agents", "Canva", "Node.js"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center">
        <SlideInLeft>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Designing Logic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Developing Art.
            </span>
          </h1>
        </SlideInLeft>
        
        <SlideInLeft delay={0.1}>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            I bridge the gap between aesthetic precision and engineering rigor. 
            Building scalable, high-performance web applications with a focus on modern architecture and fluid user interaction.
          </p>
        </SlideInLeft>

        <SlideInLeft delay={0.2}>
          <div className="flex gap-4">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </SlideInLeft>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Database className="w-6 h-6 text-primary" /> Tech Stack
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill} delay={index * 0.05}>
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg text-center font-medium bg-slate-50 dark:bg-slate-900/50 hover:border-primary transition-colors cursor-default">
                {skill}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Quick Services/Identity */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-900">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Engineering</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Clean, strict TypeScript code. Scalable architecture using Next.js App Router and Firebase backend services.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Pixel-perfect implementation using Tailwind. Minimalist UI/UX with tasteful motion using React Bits techniques.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}