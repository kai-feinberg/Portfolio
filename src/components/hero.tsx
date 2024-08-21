import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiX, SiGithub, SiLinkedin, SiFarcaster } from "@icons-pack/react-simple-icons"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiNodedotjsHex, SiExpo, SiExpoHex } from '@icons-pack/react-simple-icons';
import { SiReactHex, SiTypescriptHex, SiPythonHex, SiReactqueryHex, SiRustHex, SiShadcnuiHex, SiSolidityHex, SiNumpyHex, SiTailwindcssHex, SiNextdotjsHex, SiGmail, SiGmailHex } from '@icons-pack/react-simple-icons';
import { FloatingDock } from './ui/floating-dock';
import { Badge } from "./ui/badge"
import { Mail } from "lucide-react";
import React from "react";

export default function Hero() {
  const [showMessage, setShowMessage] = React.useState(false);
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
      title: "Next.js",
      icon: (
        <SiNextdotjs size={32} color={SiNextdotjsHex} />

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
      title: "Node.js",
      icon: (
        <SiNodedotjs size={32} color={SiNodedotjsHex} />
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

  const handleCopy = () => {
    navigator.clipboard.writeText("kaiwfeinberg@gmail.com").then(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2500);
    });
  };

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
                  <div className="relative">
                    {showMessage && (
                      <div className="ease-in duration-500 absolute bg-white text-black rounded -top-8 mt-20 p-4">
                         🎉 Copied kaiwfeinberg@gmail.com to clipboard!
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopy}
                    >
                      <Mail size={32} color="#EA4335" />
                    </Button>
                  </div>
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


              <div className="mt-8 w-full">
                <div className="flex flex-row items-center">
                  <h2 className="text-2xl font-semibold mr-8 dark:text-white flex-shrink-0">My tech <br /> stack...</h2>
                  <div className="">
                    <FloatingDock items={links} />
                  </div>
                </div>
                <div className="flex justify-end mt-2 mr-8">
                  <div className="relative group">
                    <p className="cursor-pointer">with experience in...</p>
                    <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4">
                      <div className="flex flex-row justify-center gap-4">
                        <SiReactquery size={32} color={SiReactqueryHex} />
                        <SiPython size={32} color={SiPythonHex} />
                        <SiShadcnui size={32} color={SiShadcnuiHex} />
                        <SiExpo size={32} color={SiExpoHex} />
                        <SiRust size={32} color={SiRustHex} />
                        <SiNumpy size={32} color={SiNumpyHex} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div >
  )
}
