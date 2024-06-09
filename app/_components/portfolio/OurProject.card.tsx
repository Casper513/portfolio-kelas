import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OurSkill = () => {
  return (
    <section className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:my-56">
      <div className="flex flex-col gap-2 items-center mb-20 justify-center w-full">
        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">What we make?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative overflow-hidden group">
          <Card className="">
            <CardContent className="p-0">
              <CardHeader className="p-4">
                <div className="relative w-full h-48">
                  <Image
                    src='https://source.unsplash.com/random/?boy&1'
                    alt="boy"
                    className="w-full h-full object-cover"
                    layout="fill"
                    quality={100}
                  />
                </div>
              </CardHeader>
              <CardHeader className="p-4 pt-2">
                <CardTitle>Blog Website</CardTitle>
                <CardDescription>This website is made with HTML, CSS, JavaScript, and MySQL</CardDescription>
              </CardHeader>
              <CardFooter className="absolute flex justify-end bottom-0 left-0 w-full p-4 bg-black bg-opacity-5 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <Button>View</Button>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default OurSkill;
