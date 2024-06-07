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
          {children}
    </>


  );
}
