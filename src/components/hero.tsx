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
        <section className="max-w-[1100px] mx-auto py-10 mb-10">
          <div className="container flex items-start justify-center gap-6 px-4 md:px-6">
            <div className="flex justify-end pr-10">
              <div className="flex flex-col items-center relative">
                <img
                  src="/headshot.webp"
                  width="384"
                  height="480"
                  alt="Hero"
                  className="overflow-hidden rounded-xl object-cover max-w-[384px] h-[29rem]" // Fixed width
                />
                <Badge className="text-md absolute top-4 left-4">🥇 $9k hackathon winnings</Badge>
              </div>
            </div>
            <div className="max-w-[50%]">
              <p className="text-2xl font-bold text-muted-foreground">Hey there! I'm Kai.</p>
              <TextGenerateEffect words="I'm a scrappy builder of innovative apps" className="text-6xl text-purple-400b leading-none" />

              <p className="max-w-[600px] mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a developer, engineer, and designer passionate about building products and solving problems.
              </p>


              <div className="mt-8 w-full">
                <div className='flex flex-row gap-4 mt-4'>
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
          </div>

        </section>
      </main>
    </div >
  )
}
