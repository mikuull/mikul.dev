import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className="h-full mt-24">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl text-white/60">Frontend Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br /> <span className="text-accent">Mikul</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2 border-accent rounded-xl text-accent hover:text-white"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
