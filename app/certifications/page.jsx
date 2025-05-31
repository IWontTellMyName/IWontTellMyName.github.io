"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaPython, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const nptel = {
  icon: "/assets/resume/cap.svg",
  title: "My Certifications",
  desc: "Aspiring computer programmer with a B.Tech degree and proven problem-solving and troubleshooting skills",
  items: [
    {
      institute: "IIT Madras",
      position: "Top 1% Topper",
      duration: "Oct 2022 - May 2026",
      grade: "9.03 CGPA",
      course: "AI: Search Methods for Problem Solving by Deepak Khemani",
    },
    {
      institute: "IIT KGP",
      position: "Top 1% Topper",
      duration: "Top 1% Topper",
      grade: "88.83%",
      course: "NLP"
    },
    {
      institute: "Ram Mohan Mission",
      position: "Class X",
      duration: "2019 - 2020",
      grade: "85.83%",
      course: "Overall Subjects"
    }
  ]
}

const coursera = {
  icon: "/assets/resume/cap.svg",
  title: "Competetive Exams",
  desc: "Aspiring computer programmer with a B.Tech degree and proven problem-solving and troubleshooting skills",
  items: [
    {
      achieve: "Rank 1023",
      course: "Data Science & Artificial Intelligence",
      issuedIn: "2025",
      issuedBy: "GATE"
    },
    {
      achieve: "Rank 5305",
      course: "Science",
      issuedIn: "2022",
      issuedBy: "WBJEE"
    },
    {
      achieve: "Rank 57000",
      course: "Science",
      issuedIn: "2022",
      issuedBy: "JEE Mains"
    },
  ]
}


const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[75vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="nptel"
          className="flex flex-col xl:flex-col gap-[60px]"
        >
          <TabsList className="flex flex-row w-full max-w-[600px] mx-0 md:mx-auto gap-6">
            <TabsTrigger value="nptel" className="whitespace-normal text-center">DS domain from IITs</TabsTrigger>
            <TabsTrigger value="exams" className="whitespace-normal text-center">From other Organisations</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* nptel */}
            <TabsContent value="nptel" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">
                  {nptel.title}
                </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-base">
                  {nptel.desc}
                </p>
                <ScrollArea className="h-[420px] lg:min-w-[800px] xl:min-w-[800px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-4 my-2">
                    {nptel.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2b2b32] h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 shadow-md shadow-green-600"
                        >
                          <span
                            className="text-accent text-xs"
                          >
                            {item.duration}
                          </span>
                          <h3 className={`text-center lg:text-left ${item.course.length > 25 ? 'text-xs' : 'text-base'} max-w-[260px] min-h-[30px]`}>
                            {item.course}
                          </h3>
                          <span className={`text-center lg:text-left ${item.position.length > 20 ? 'text-sm' : 'text-base'}`}>{item.position}</span>
                          <div className="flex items-center gap-3 my-2">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-xs">{item.institute}</p>
                          </div>
                          <span className="text-white/80 text-xs">{item.grade}</span>
                          <span className="text-white text-xs">{item.guide ? `Guided By: ${item.guide}` : ''}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* courseras */}
            <TabsContent value="exams" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">
                  {coursera.title}
                </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-base">
                  {coursera.desc}
                </p>
                <ScrollArea className="h-[400px] lg:min-w-[800px] xl:min-w-[800px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-4 my-2">
                    {coursera.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2b2b32] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 shadow-md shadow-green-600"
                        >
                          <span
                            className="text-accent text-xs"
                          >
                            {item.issuedIn}
                          </span>
                          <h3 className={`text-center lg:text-left ${item.achieve.length > 25 ? 'text-xs' : 'text-lg'} max-w-[260px] min-h-[35px]`}>
                            {item.achieve}
                          </h3>
                          <div className="flex items-center gap-3 my-2">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{item.issuedBy}</p>
                          </div>
                          <span className="text-white/80 text-sm">{item.course}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Certifications;