import Slider from "@/app/_components/portfolio/Student.slider";

const BioData = () => {
  return (
      <section className="flex flex-col gap-8">
      <div>
        <div className="flex flex-col gap-2 items-start justify-center w-full">
          <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">it&apos;s Our Bio Data</h1>
        </div>
          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-500 block max-w-full">We studied at <span className="w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-500 font-bold max-w-full from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent bg-gradient-to-b cursor-pointer">UNIVERSITAS AN-NUQAYAH</span> majoring in information technology</p>
      </div>
        <div id="student" className="grid grid-cols-1 align-middle lg:grid-cols-2 gap-4 overflow-hidden">
          <Slider/>
        </div>
      </section>
  )
}

export default BioData