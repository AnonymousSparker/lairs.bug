import { FadeIn } from "@/components/ui/animations";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 font-mono">
      <FadeIn>
        <div className="border-b-4 border-[#0B132B] pb-4 mb-12">
           <h1 className="text-4xl font-bold text-[#0B132B]">
            whoami
          </h1>
        </div>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.1}>
          <div className="bg-white border-2 border-[#0B132B] p-8 shadow-[8px_8px_0px_0px_#3A506B]">
            <p className="text-lg text-[#0B132B] leading-relaxed mb-6">
              <span className="text-[#5BC0BE] font-bold">{`>`}</span> I am a multidisciplinary web designer and developer obsessed with the intersection of code and canvas. 
              With a background in traditional design and a hard pivot into full-stack engineering, I bring a unique 
              perspective to every project.
            </p>
            <p className="text-[#3A506B] text-sm border-l-2 border-[#3A506B] pl-4 italic">
              // Technical excellence should never come at the cost of user experience.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-xl font-bold text-[#0B132B] mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#5BC0BE]"></span> The Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 border-2 border-[#e2e8f0] bg-[#f8fafc]">
                <strong className="block text-[#0B132B] mb-1">Frontend</strong>
                <p className="text-[#3A506B] text-sm">Next.js, React, Tailwind CSS, Framer Motion</p>
             </div>
             <div className="p-4 border-2 border-[#e2e8f0] bg-[#f8fafc]">
                <strong className="block text-[#0B132B] mb-1">Backend</strong>
                <p className="text-[#3A506B] text-sm">Node.js, Firebase, PostgreSQL, Python</p>
             </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h3 className="text-xl font-bold text-[#0B132B] mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#1C2541]"></span> Offline_Mode
          </h3>
          <p className="text-[#3A506B] leading-relaxed">
            When I'm not deploying to Vercel, I'm exploring new animation libraries like React Bits, optimizing 
            Lighthouse scores, or curating digital assets in Canva.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}