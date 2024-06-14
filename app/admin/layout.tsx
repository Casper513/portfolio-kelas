import NavBar from "./_components/navbar";

const layout = ({children,
}: Readonly<{
  children: React.ReactNode;
}>) =>{
  return (
    <>
    <div className="w-screen min-h-screen">
      <NavBar/>
      {children}
    </div>
    </>
  )
}

export default layout