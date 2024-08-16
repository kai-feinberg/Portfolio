import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiNodedotjsHex, SiExpo, SiExpoHex } from '@icons-pack/react-simple-icons';
import { SiReactHex, SiTypescriptHex, SiPythonHex, SiReactqueryHex, SiRustHex, SiShadcnuiHex, SiSolidityHex, SiNumpyHex, SiTailwindcssHex, SiNextdotjsHex } from '@icons-pack/react-simple-icons';

export default function TechStack() {
  return (

    <div className='mb-10'>
      <section className="mt-2">
        <div className="flex flex-row items-center bg-white shadow-md rounded-lg p-8 ">
          <h2 className="text-2xl font-semibold mb-0 mr-16 flex items-center dark:text-black">I'm most <br /> proficient in...</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="react">
              <div className="rounded-lg p-4 border-gray-100 shadow-sm" >
                <SiReact size={42} color={SiReactHex} />
              </div>
            </a>
            <a className="typescript">
              <div className="rounded-lg p-4 border-gray-100 shadow-sm" >
                <SiTypescript size={42} color={SiTypescriptHex} />
              </div>
            </a>
            <a className="shadcn">
              <div className="rounded-lg p-4 border-gray-100 shadow-sm">
                <SiShadcnui size={42} color={SiShadcnuiHex} />
              </div>
            </a>
            <a className="shadcn">
              <div className="rounded-lg p-4 border-gray-100 shadow-sm">
                <SiTailwindcss size={42} color={SiTailwindcssHex} />
              </div>
            </a>
            <a className="python">
              <div className="rounded-lg p-4 border-gray-100 shadow-sm">
                <SiPython size={42} color={SiPythonHex} />
              </div>
            </a>
            <a className="solidity">
              <div className="rounded-lg p-4 border-gray-100 shadow-sm" >
                <SiSolidity size={42} color={SiSolidityHex} />
              </div>
            </a>
          </div>
        </div>
      </section>

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