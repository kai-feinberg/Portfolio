import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiNodedotjsHex, SiExpo, SiExpoHex } from '@icons-pack/react-simple-icons';
import { SiReactHex, SiTypescriptHex, SiPythonHex, SiReactqueryHex, SiRustHex, SiShadcnuiHex, SiSolidityHex, SiNumpyHex, SiTailwindcssHex, SiNextdotjsHex } from '@icons-pack/react-simple-icons';
import { FloatingDock } from './ui/floating-dock';

export default function TechStack() {
  const links = [
    {
      title: "React",
      icon: (
        <SiReact size={48} color="black" />
      ),
      href: "",
    },
    {
      title: "TypeScript",
      icon: (
        <SiTypescript size={48} color={SiTypescriptHex} />
      ),
      href: "",
    },
    {
      title: "Next.js",
      icon: (
        <SiNextdotjs size={48} color={SiNextdotjsHex} />

      ),
      href: "",
    },

    {
      title: "Tailwind",
      icon: (
        <SiTailwindcss size={48} color={SiTailwindcssHex} />
      ),
      href: "",
    },
    {
      title: "Node.js",
      icon: (
        <SiNodedotjs size={48} color={SiNodedotjsHex} />
      ),
      href: "",
    },
    {
      title: "Solidity",
      icon: (
        <SiSolidity size={48} color={SiSolidityHex} />
      ),
      href: "",
    },
  ];
  return (
    <div className='mb-16'>
      <div className="flex flex-row items-center">
        <h2 className="text-3xl font-semibold mr-8 dark:text-white flex-shrink-0">My tech stack:</h2>
        <div className="">
          <FloatingDock items={links} />
        </div>
      </div>
      <div className="flex justify-end mt-2 mr-2">
        <div className="relative group">
          <p className="cursor-pointer font-medium">with experience in...</p>
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

  );
}