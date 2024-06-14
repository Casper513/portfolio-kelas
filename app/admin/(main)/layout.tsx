import Sidebar from "../_components/sidebar";

const layout = ({children,
}: Readonly<{
  children: React.ReactNode;
}>) =>{
  return (
    <>
    <main className="mt-16 md:mt-18 px-4 max-w-7xl 2xl:max-w-screen-xl h-full mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block md: border-r-1 p-4">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
    </>
  )
}

export default layout