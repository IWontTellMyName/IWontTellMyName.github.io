"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from 'framer-motion';

const publications = [
  {
    num: '01',
    title: 'AgroGenie: A Smart Approach to Agriculture Using Machine Learning',
    desc: 'A Sarkar, K Ganguly, S Ghosh, D Ghosh, S Saha, P Datta & D Guha Roy - International Conference on Information Science and Applications 2024',
    href: 'https://link.springer.com/chapter/10.1007/978-981-97-9839-1_17'
  },
  {
    num: '02',
    title: 'Arduino & Ultrasonic Sensor Based Smart Dustbin For Efficient Waste Management',
    desc: 'K Ganguly, S Saha, S Ghosh, A Sarkar, D Ghosh, S Pachal, A Mukherjee, R Bhati, A Debnath & D Ghosh - International Journal of Innovative Research in Physics',
    href: 'https://ijiip.smartsociety.org/vol4_issue2/IJIIP%20_Vol4_issue2_paper%201.pdf'
  },
  {
    num: '03',
    title: 'Exploring IoT for real-time CO2 monitoring and analysis',
    desc: 'A Sarkar, D Ghosh, K Ganguly, S Ghosh & S Saha - arXiv preprint',
    href: 'https://arxiv.org/pdf/2308.03780'
  },
]

const Publications = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-4 xl:py-0 md:mt-2 xl:mt-2"> 
        <div className="container mx-auto my-500">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity:1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[60px]"
          >
            <div className="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-bold">
              My Publications
            </h3>
            <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-base">
              Cutting edge reserach yet simple to comprehend
            </p>
            </div>
            {publications.map((pub, index) => {
              return(
                <Link key={index}
                  target="_blank" rel="noopener noreferrer"
                  href={pub.href}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  
                  {/* TOP */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{pub.num}</div>
                    <div className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-2xl"/>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-[22px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                    {pub.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-white/60 text-[12px] group-hover:text-accent">
                    {pub.desc}
                  </p>

                  {/* BORDER */}
                  {/* <div className="border-b border-white/20 w-full"></div> */}
                {/* </div> */}
                    </Link>
              );
            })}
          </motion.div>
        </div>
      </section>
    )
  }
  
  export default Publications