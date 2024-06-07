import Nav from "@/app/_components/portfolio/Navbar.components";
import Footer from "@/app/_components/portfolio/Footer.card";
import _main from './_main';


export default function Home() {
  return (
    <>
      <div className="relative flex flex-col">
        <Nav />
        <_main />
        <Footer />
      </div>
    </>
  );
}