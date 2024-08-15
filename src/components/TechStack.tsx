import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs } from '@icons-pack/react-simple-icons';
import { SiReactHex, SiTypescriptHex, SiPythonHex, SiReactqueryHex, SiRustHex, SiShadcnuiHex, SiSolidityHex, SiNumpyHex, SiTailwindcssHex, SiNextdotjsHex } from '@icons-pack/react-simple-icons';

export default function TechStack() {
  return (

    <div className='mb-10'>
      <section className="mt-2">
        <div className="flex flex-row items-center bg-white shadow-md rounded-lg p-8 ">
          <h2 className="text-2xl font-semibold mb-0 mr-16 flex items-center">I'm most <br/> proficient in...</h2>
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

      <section className="mt-16">
        <h2 className="text-4xl font-semibold mb-8">And I have experience in</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div data-tip="Rust">
            <SiRust size={48} />
          </div>
          <div data-tip="React Query">
            <SiReactquery size={48} />
          </div>
          <div data-tip="Python">
            <SiPython size={48} />
          </div>
          <div data-tip="Python">
            <SiNumpy size={48} />
          </div>
          <div data-tip="Next.js">
            <SiNextdotjs size={48} />
          </div>
        </div>
      </section>
    </div>
  );
}