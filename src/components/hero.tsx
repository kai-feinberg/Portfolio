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
        <section className="max-w-[1100px] mx-auto py-6 md:py-10 mb-6 md:mb-10">
          <div className="container flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 px-4 md:px-6">
            <div className="flex justify-center md:justify-end md:pr-10 w-full md:w-auto">
              <div className="flex flex-col items-center relative">
                <img
                  src="/headshot.webp"
                  width="384"
                  height="480"
                  alt="Hero"
                  className="overflow-hidden rounded-xl object-cover w-64 sm:w-80 md:max-w-[384px] h-80 sm:h-96 md:h-[29rem]"
                />
                <Badge className="text-xs sm:text-sm md:text-md absolute top-4 left-4">🥇 $9,175 hackathon winnings</Badge>
              </div>
            </div>
            <div className="w-full md:max-w-[50%] text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground">Hey there! I&apos;m Kai.</p>
              <TextGenerateEffect words="I build cool apps solving real problems" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-400b leading-tight md:leading-none" />

              <p className="max-w-full md:max-w-[600px] mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              I combine design thinking with coding and AI skills to identify pressing issues and build practical solutions.
              </p>

              <div className="mt-4 md:mt-6">
                <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  <p className="font-semibold text-xl">🏆 Northwestern University</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">09/25 - MS in Computer Science </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">06/25 - BS in Design Engineering (Cum Laude) </p>
                  {/* <p className="text-sm sm:text-base md:text-lg lg:text-lg">*Cum Laude</p> */}
                </div>
              </div>

              <div className="mt-6 md:mt-8 w-full">
                <div className='flex flex-row justify-center md:justify-start gap-4 mt-4'>
                  <a href="https://github.com/kai-feinberg?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <SiGithub size={28} className="sm:w-8 sm:h-8" />
                    </Button>
                  </a>
                
                  <a href="https://www.linkedin.com/in/kai-feinberg/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <SiLinkedin size={28} color="#0A66C2" className="sm:w-8 sm:h-8" />
                    </Button>
                  </a>
                 
                  <div className="relative">
                    {showMessage && (
                      <div className="ease-in duration-500 absolute bg-white text-black rounded px-3 py-2 text-xs sm:text-sm -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                        🎉 Copied kaiwfeinberg@gmail.com to clipboard!
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopy}
                    >
                      <Mail size={28} color="#EA4335" className="sm:w-8 sm:h-8" />
                    </Button>
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
