"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from 'framer-motion';

const internships = [
  {
    num: '01',
    title: 'Research & Development Intern at IIT Kharagpur',
    desc: 'Working as Blockchain Researcher at Smart Wireless Applications & Networking Lab under Prof. Sudip Mishra',
    href: 'https://cse.iitkgp.ac.in/~smisra/swan/'
  },
  {
    num: '02',
    title: 'Project Intern at Dept. of IT&E, Govt. of WB',
    desc: 'Worked on helping beneficiaries identify suitable government schemes at Centre of Excellence on Data Science and Machine Learning managed by WEBEL',
    href: 'https://udin.wb.gov.in/verify-udin/eYr8EmN6ZPrk9zSgDAtV/sRS7PoSzLwGeiivkbaBq8c='
  },
  {
    num: '03',
    title: 'Project Intern at IIT Ropar',
    desc: '3 months internship under Prof. Sudarshan Iyengar, HoD-CSE where I developed a student learning management system and live-tested it on IIT Ropar students',
    href: 'https://drive.google.com/file/d/1PXW5qyDSqOCaCT5bqoPP0O5gC9_cD9kR/view'
  },
  {
    num: '04',
    title: 'Blockchain dev Freelancer',
    desc: 'Worked on automating batch-transfer & minting of NFTs thereby cutting transaction costs by 60% and saving hours of client time',
    href: 'https://nft.io/collection/cryptotipsfriends/assets'
  },
]

const Internships = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-4 xl:py-0 md:mt-2 xl:mt-2"> 
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity:1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold">
                My Internships
              </h3>
              <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-base">
                Clients were always satisfied with the delivered results
              </p>
            </div>
        
            {internships.map((pub, index) => {
              return(
                <div 
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  
                  {/* TOP */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{pub.num}</div>
                    <Link 
                      target="_blank" rel="noopener noreferrer"
                      href={pub.href}
                      className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-2xl"/>
                    </Link>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-[22px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                    {pub.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-white/60 text-[12px]  group-hover:text-accent">
                    {pub.desc}
                  </p>

                  {/* BORDER */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
            {/* </div> */}
          </motion.div>
        </div>
      </section>
    )
  }
  
  export default Internships