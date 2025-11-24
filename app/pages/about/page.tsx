import { FadeIn } from "@/components/ui/animations";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </FadeIn>

      <div className="prose prose-slate dark:prose-invert prose-lg">
        <FadeIn delay={0.1}>
          <p>
            I am a multidisciplinary web designer and developer obsessed with the intersection of code and canvas. 
            With a background in traditional design and a hard pivot into full-stack engineering, I bring a unique 
            perspective to every project: technical excellence should never come at the cost of user experience.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-xl font-bold mt-8 mb-4">The Workflow</h3>
          <p>
            My stack is opinionated but flexible. I rely on <strong>Next.js</strong> for its robust routing and server-side capabilities, 
            <strong>Tailwind CSS</strong> for rapid, consistent styling, and <strong>Firebase</strong> for backend agility. 
            I leverage AI agents to accelerate boilerplate generation, allowing me to focus on complex logic and polish.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h3 className="text-xl font-bold mt-8 mb-4">Beyond Code</h3>
          <p>
            When I'm not deploying to Vercel, I'm exploring new animation libraries like React Bits, optimizing 
            Lighthouse scores, or curating digital assets in Canva.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}