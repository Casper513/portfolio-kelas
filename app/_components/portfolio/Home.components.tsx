import { Button } from '@/components/ui/button';

const Utama = () => {
  return (
    <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
      <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
        <div className="text-center leading-8 md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
              Make&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              evrything&nbsp;
            </h1>
          </div>
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            you need with our experience.
          </h1>
        </div>
        <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full text-center md:text-left">
          Beautiful, fast and modern website.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="hidden lg:flex flex-col relative z-20 w-1/2">
        <h1>Hello World</h1>
      </div>
      {/* This background is not swown */}
      <div
        className={`w-full h-full absolute -top-28 z-0`}
      >
        <div className="area light:hidden">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Utama