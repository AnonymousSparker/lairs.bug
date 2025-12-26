import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Code2, Layout, Terminal } from "lucide-react";
import { FadeIn, SlideInLeft } from "@/components/ui/animations";

export default function Home() {
  const skills = [
    "Next.js_16", "TypeScript", "Tailwind", "Firebase", 
    "System_Design", "AI_Agents", "Node.js", "Git"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 select-none">
        <div className="flex-1 space-y-8">
          <SlideInLeft>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary bg-[#0B132B]/5 rounded uppercase font-mono">
              Available for hire
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0B132B] mb-6">
              <span className="text-[#3A506B] text-4xl md:text-6xl block mb-2">{`<h1>`}</span>
              Building Logic.<br />
              Compiling Art.
              <span className="text-[#3A506B] text-4xl md:text-6xl block mt-2">{`</h1>`}</span>
            </h1>
          </SlideInLeft>
          
          <SlideInLeft delay={0.1}>
            <p className="text-lg text-[#3A506B] max-w-xl leading-relaxed border-l-2 border-primary pl-6 font-mono">
              /** <br/>
              * Full-stack engineer focused on scalable architecture <br/>
              * and minimal, high-performance interfaces. <br/>
              */
            </p>
          </SlideInLeft>

          <SlideInLeft delay={0.2}>
            <div className="flex gap-4 pt-4">
              <Link 
                href="/pages/projects" 
                className="px-8 py-4 bg-[#0B132B] text-white rounded-none font-bold hover:bg-[#1C2541] transition-all flex items-center gap-3 group"
              >
                View_Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/pages/contact" 
                className="px-8 py-4 border-2 border-[#0B132B] text-[#0B132B] rounded-none font-bold hover:bg-[#0B132B] hover:text-white transition-colors"
              >
                Contact_Me
              </Link>
            </div>
          </SlideInLeft>
        </div>

        <FadeIn delay={0.3} className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]" style={{userSelect:"none"}}>
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-90"></div>
            <div className="relative z-10 w-full h-full border-b-4 border-primary bg-gradient-to-b from-transparent to-[#5BC0BE]/20 rounded-b-full overflow-hidden">
               <Image 
                src="/logo.jpeg" 
                alt="Developer Avatar" 
                fill
                className="object-cover object-center"
                draggable="false"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl border border-[#3A506B]/10 z-20 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-xs text-[#3A506B] font-mono">git commit -m "Initial commit"</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[#0B132B]">
            <Terminal className="w-6 h-6 text-primary" /> 
            <span className="border-b-4 border-primary/30">System_Capabilities</span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <FadeIn key={skill} delay={index * 0.05}>
              <div className="p-6 border-2 border-[#e2e8f0] hover:border-[#0B132B] hover:shadow-[4px_4px_0px_0px_#0B132B] transition-all cursor-default bg-white group">
                <span className="text-primary font-bold text-lg group-hover:text-[#0B132B] transition-colors">#</span> {skill}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-t border-[#3A506B]/10">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#0B132B] text-white flex items-center justify-center mb-6 shadow-[8px_8px_0px_0px_#5BC0BE]">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-[#0B132B]">Engineering</h3>
              <p className="text-[#3A506B] text-lg leading-relaxed">
                Clean, strict TypeScript code. Scalable architecture using Next.js App Router and Firebase backend services. I build systems that last.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white border-2 border-[#0B132B] text-[#0B132B] flex items-center justify-center mb-6 shadow-[8px_8px_0px_0px_#3A506B]">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-[#0B132B]">UI/UX Design</h3>
              <p className="text-[#3A506B] text-lg leading-relaxed">
                Pixel-perfect implementation using Tailwind. Minimalist UI/UX with tasteful motion using React Bits techniques.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Adsterra Integration - Using next/script for safe loading */}
      <Script id="adsterra-options" strategy="beforeInteractive">
        {`
          window.atOptions = {
            'key' : '8af953e97e659d53458adbdfb6a09f64',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `}
      </Script>
      <Script 
        src="https://www.highperformanceformat.com/8af953e97e659d53458adbdfb6a09f64/invoke.js" 
        strategy="afterInteractive"
      />
    </div>
  );
}
