import NavBar from "@/app/_components/admin/NavBar";
import SideBar from "@/app/_components/admin/SideBar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar/>
      <SideBar/>
      <div className="p-4 lg:ml-64 mt-14">
        <div className="flex min-h-screen justify-center rounded bg-gray-50 dark:bg-gray-800">
            {children}
        </div>
      </div>
    </>


  );
}
