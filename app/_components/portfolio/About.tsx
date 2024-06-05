import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col gap-6 w-full mt-24 lg:my-56">
      <div className="flex flex-col gap-2 items-center mb-6 lg:mb-12 justify-center w-full">
        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">About Us</h1>
      </div>
      <div id="student" className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">
        <div className=" w-full h-64 lg:h-[580px]">
          <Image
            src='https://source.unsplash.com/random/?cute&1'
            alt="Our photo"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto p-4">
          <div 
            className="shadow-md rounded-lg p-0 lg:p-4"
          >
            <p className="text-gray-400 text-[.8rem] lg:text-lg mb-2">
              Kami adalah mahasiswa TI-B Angkatan 22 di UNIVERSITAS ANNUQAYAH, Prodi Teknologi jurusan TI. Kami berdedikasi untuk mempelajari dan mengembangkan teknologi terbaru dalam bidang teknologi informasi.
            </p>
            <p className="text-gray-400 text-[.8rem] lg:text-lg mb-2">
              Tujuan kami adalah untuk menjadi profesional yang kompeten di bidang teknologi informasi, siap untuk menghadapi tantangan di dunia kerja, dan memberikan kontribusi positif bagi masyarakat melalui inovasi teknologi.
            </p>
            <p className="text-gray-400 text-[.8rem] lg:text-lg">
              Dengan semangat belajar yang tinggi, kami berusaha untuk selalu mengikuti perkembangan teknologi dan terus meningkatkan keterampilan kami dalam berbagai bidang seperti pemrograman, jaringan komputer, keamanan siber, dan banyak lagi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
