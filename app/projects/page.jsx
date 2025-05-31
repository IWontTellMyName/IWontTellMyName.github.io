"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from 'framer-motion';

const projects = [
  {
    num: '01',
    title: 'AgroGenie.ai - HTML, CSS, JavaScript, Python, Flask, SkLearn, Numpy, Pandas',
    desc: 'Worked in a team of 5 to implement a Machine Learning based Crop Recommendation System. Personally implemented the Flask backend used to handle requests and run the python programs on the server',
    href: 'https://github.com/debayangg/AgroGenie.ai'
  },
  {
    num: '02',
    title: 'IoT-based CO2 Level Monitoring System -NodeMCU, MQ135, DHT11',
    desc: 'Collaborated with a team of 6 to build an IoT-based CO2 monitoring system using ThingSpeak API for real-time data storage and visualization, increasing data accuracy by 20% without added power cost',
    href: 'https://github.com/IWontTellMyName/IoT-based-CO2-Level-Monitoring-System'
  },
  {
    num: '03',
    title: 'Student Management System - Python, Pandas, Matplotlib',
    desc: 'Works with CSV files to create, update, and delete student records; Autogenerates human friendly batch ids when creating a new batch; Plots graphs to track class and student performance using Matplotlib',
    href: 'https://github.com/IWontTellMyName/Student-Examination-Portal'
  },
  {
    num: '04',
    title: 'Library Management System - C, Time.h',
    desc: 'Works with CSV files to allow users to borrow and return books; Helps admins add and remove books and users. Also recommends empty shelf spaces when adding books; Each borrow transaction is automatically timestamped to check for late fees afterwards',
    href: 'https://github.com/IWontTellMyName/Library-Management-System-'
  },
  {
    num: '05',
    title: 'ATM Simulator - C, Time.h',
    desc: 'Implemented a basic RSA encryption system to store user data securely; Works with CSV files to allow users to check balance, deposit or withdraw funds and change card pin without compromising on security; Can also be used to generate new card numbers and pins safely',
    href: 'https://github.com/IWontTellMyName/ATM-Simulator'
  },
]

const Projects = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-4 xl:py-0 md:mt-2 xl:mt-2"> 
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity:1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[60px]"
          >
            {projects.map((pub, index) => {
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
                  <div className="border-b border-white/20 w-full"></div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>
    )
  }
  
  export default Projects