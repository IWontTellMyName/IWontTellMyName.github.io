import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-8">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">Computer Science Student & Intern</span> */}
            <h1 className="h2 mb-6">
              Hello I'm <br /> <span className="text-accent h1">Snehal Ghosh</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 text-lg">
              Research & Development Intern at IIT Kharagpur while pursuing Bachelor of Technology in Computer Science and Engineering. 
            </p>

            <p className="max-w-[600px] mb-9 text-white/80 text-base">
              My areas of interest is mainly in the domain of AIML and Blockchain.
            </p>
            {/* CV and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">

              {/* CV Button */}
             <Link href={"https://drive.google.com/file/d/1UVH-YckQc5Ew2Y3WM60wNGvFlgDymrn8/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
             </Link>
              {/* Socials */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>

            </div>
          </div>
          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
