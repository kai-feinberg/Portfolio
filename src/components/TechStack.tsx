import { SiReact, SiTypescript, SiPython, SiReactquery, SiRust, SiShadcnui, SiSolidity, SiNumpy, SiTailwindcss, SiNextdotjs } from '@icons-pack/react-simple-icons';

export default function TechStack() {
  return (

    <div className='mb-10'>
      <section className="mt-16">
        <div className="flex flex-row items-center ">
          <h2 className="text-4xl font-semibold mb-8 mr-4">I specialize in</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="react">
              <div className="rounded-lg p-4 bg-black  shadow-md" >
                <SiReact size={42} color='#ffffff' />
              </div>
            </a>
            <a className="typescript">
              <div className="rounded-lg p-4 bg-black shadow-md" >
                <SiTypescript size={42} color='#ffffff' />
              </div>
            </a>
            <a className="shadcn">
              <div className="rounded-lg p-4 bg-black shadow-md">
                <SiShadcnui size={42} color='#ffffff' />
              </div>
            </a>
            <a className="shadcn">
              <div className="rounded-lg p-4 bg-black shadow-md">
                <SiTailwindcss size={42} color='#ffffff' />
              </div>
            </a>
            <a className="python">
              <div className="rounded-lg p-4 bg-black shadow-md">
                <SiPython size={42} color='#ffffff' />
              </div>
            </a>
            <a className="solidity">
              <div className="rounded-lg p-4 bg-black shadow-md" >
                <SiSolidity size={42} color='#ffffff' />
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