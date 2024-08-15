import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiX, SiGithub, SiLinkedin, SiFarcaster } from "@icons-pack/react-simple-icons"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export default function Hero() {
  return (
    <div className="flex flex-col ">
      <main className="flex-1">
        <section className="max-w-[1100px] mx-auto py-16 md:py-24 lg:py-28">
          <div className="container flex items-start justify-start gap-6 px-4 md:px-6">
            <div className="flex justify-end pr-10">
              <img
                src="/placeholder.svg"
                width="384"
                height="480"
                alt="Hero"
                className="overflow-hidden rounded-xl object-cover max-w-[384px] h-[29rem]" // Fixed width
              />
            </div>
            <div className="max-w-[50%]">
              <p className="text-2xl font-bold text-muted-foreground">Hey there! I'm Kai.</p>
              <TextGenerateEffect words="I'm a builder focused on innovative apps" className="text-6xl text-purple-400b leading-none" />

              <p className="max-w-[600px] mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a developer, engineer, and designer passionate about building products and solving problems.
              </p>

              <div className='flex flex-row gap-4 mt-10'>
                <a href="https://github.com/kai-feinberg?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <SiGithub size={32}/>
                  </Button>
                </a>
                <a href="https://x.com/kai_rypto25" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <SiFarcaster size={32} color="#855DCD"/>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/kai-feinberg/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <SiLinkedin size={32} color="#0A66C2"/>
                  </Button>
                </a>
                <a href="https://x.com/kai_rypto25" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <SiX  size={32} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        
      </section>
    </main>
    </div >
  )
}
