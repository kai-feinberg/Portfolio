import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiX, SiGithub, SiLinkedin, SiFarcaster } from "@icons-pack/react-simple-icons"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiNodedotjsHex, SiExpo, SiExpoHex } from '@icons-pack/react-simple-icons';
import { SiReactHex, SiTypescriptHex, SiPythonHex, SiReactqueryHex, SiRustHex, SiShadcnuiHex, SiSolidityHex, SiNumpyHex, SiTailwindcssHex, SiNextdotjsHex } from '@icons-pack/react-simple-icons';
import { FloatingDock } from './ui/floating-dock';
import { Badge } from "./ui/badge"

export default function Hero() {
  const links = [
    {
      title: "React",
      icon: (
        <SiReact size={32} color="black" />
      ),
      href: "",
    },
    {
      title: "TypeScript",
      icon: (
        <SiTypescript size={32} color={SiTypescriptHex} />
      ),
      href: "",
    },
    {
      title: "Shadcn-ui",
      icon: (
        <SiShadcnui size={32} color={SiShadcnuiHex} />
      ),
      href: "",
    },

    {
      title: "Tailwind",
      icon: (
        <SiTailwindcss size={32} color={SiTailwindcssHex} />
      ),
      href: "",
    },
    {
      title: "Python",
      icon: (
        <SiPython size={32} color={SiPythonHex} />
      ),
      href: "",
    },
    {
      title: "Solidity",
      icon: (
        <SiSolidity size={32} color={SiSolidityHex} />
      ),
      href: "",
    },
  ];
  return (
    <div className="flex flex-col ">
      <main className="flex-1">
        <section className="max-w-[1100px] mx-auto py-10 mb-10">
          <div className="container flex items-start justify-center gap-6 px-4 md:px-6">
            <div className="flex justify-end pr-10">
              <div className="flex flex-col items-center">
                <img
                  src="/headshot.webp"
                  width="384"
                  height="480"
                  alt="Hero"
                  className="overflow-hidden rounded-xl object-cover max-w-[384px] h-[29rem]" // Fixed width
                />
                <div className='flex flex-row gap-4 mt-10'>
                  <a href="https://github.com/kai-feinberg?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <SiGithub size={32} />
                    </Button>
                  </a>
                  <a href="https://warpcast.com/kaimeariver" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <SiFarcaster size={32} color="#855DCD" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/kai-feinberg/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <SiLinkedin size={32} color="#0A66C2" />
                    </Button>
                  </a>
                  <a href="https://x.com/kai_rypto25" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <SiX size={32} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-[50%]">
              <p className="text-2xl font-bold text-muted-foreground">Hey there! I'm Kai.</p>
              <TextGenerateEffect words="I'm a scrappy builder of innovative apps" className="text-6xl text-purple-400b leading-none" />

              <p className="max-w-[600px] mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a developer, engineer, and designer passionate about building products and solving problems.
              </p>

              <Badge className="text-md mt-4">🥇  $7k hackathon winnings</Badge>

              <p className="text-xl text-muted-foreground">My tech stack</p>
              <div className="mt-4 w-full flex">
                <FloatingDock items={links} />
              </div>
            </div>

          </div>

        </section>
      </main>
    </div >
  )
}
