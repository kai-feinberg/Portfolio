import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiNodedotjsHex, SiExpo, SiExpoHex } from '@icons-pack/react-simple-icons';
import { SiReactHex, SiTypescriptHex, SiPythonHex, SiReactqueryHex, SiRustHex, SiShadcnuiHex, SiSolidityHex, SiNumpyHex, SiTailwindcssHex, SiNextdotjsHex } from '@icons-pack/react-simple-icons';
import { FloatingDock } from './ui/floating-dock';

export default function TechStack() {
  const links = [
    {
      title: "React",
      icon: (
        <SiReact size={32} color={SiReactHex} />
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
    <div>
      <div className="flex items-center justify-center w-full">
        <FloatingDock
          items={links}
        />
      </div>
       <div className="flex flex-row items-center bg-white shadow-md rounded-lg p-8 mt-2">
       <h2 className="text-2xl font-semibold mb-0 mr-16 flex items-center dark:text-black">And I have <br /> experience in...</h2>
       <div className="flex flex-wrap justify-center gap-4">
           <div data-tip="React Query">
             <SiReactquery size={32} color={SiReactqueryHex} />
           </div>
           <div data-tip="Next.js">
             <SiNextdotjs size={32} color={SiNextdotjsHex} />
           </div>
           <div data-tip="node.js">
             <SiNodedotjs size={32} color={SiNodedotjsHex} />
           </div>
           <div data-tip="expo">
             <SiExpo size={32} color={SiExpoHex} />
           </div>
           <div data-tip="Rust">
             <SiRust size={32} color={SiRustHex} />
           </div>
           <div data-tip="NumPy">
             <SiNumpy size={32} color={SiNumpyHex} />
           </div>
         </div>
       </div>
    </div>

  );
}