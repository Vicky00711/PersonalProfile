import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Prateek from "../assets/prateek2.jpeg";
import { animate, easeInOut, motion } from 'framer-motion';

const framermotion = {
  initial: {
    y: "200vh",
  },
  animate: {
    y: 0,
  },
};

function Hello() {
  return (
    <motion.section
      transition={{ delay: 0.75, ease: 'easeInOut' }}
      class="text-gray-600 body-font overflow-hidden "
    >
      <div class="container px-5 py-24 mx-auto max-w-7xl">
        <motion.div
          variants={framermotion}
          initial="initial"
          animate="animate"
          transition={{ type: 'spring', stiffness: 70, delay:1,  duration: 1.5 }}
          class="shadow-2xl rounded-lg mx-auto flex flex-col lg:flex-row items-center lg:items-start"
        >
          {/* Profile Image */}
          <div class="w-full lg:w-auto">
            <img
              alt="Profile Picture"
              class="w-[250px] lg:w-[400px] mx-auto lg:h-auto h-64 object-cover object-center rounded-full shadow-2xl"
              src={Prateek}
            />
          </div>
          {/* Content */}
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-6">
            <h2 class="text-sm title-font text-white tracking-widest">Software Developer</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Prateek Sahoo</h1>
            <div class="flex mb-4 justify-center lg:justify-start">
              <span class="flex pl-0 lg:pl-3 py-2 space-x-4">
                <motion.a
                  whileHover={{ scale: 1.5, backgroundColor: 'white', cursor: 'pointer' }}
                  class="text-blue-600 rounded-full shadow-2xl"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.5, backgroundColor: 'white', cursor: 'pointer' }}
                  class="text-blue-300 rounded-full shadow-2xl"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.5, backgroundColor: 'white', cursor: 'pointer' }}
                  class="text-green-400 rounded-full shadow-2xl"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </motion.a>
              </span>
            </div>
            <p class="leading-relaxed text-white">
             I'm a second-year university student specializing in software engineering at The Manchester Metropolitan University who is excited to expand his technological knowledge and abilities. I'm looking for chances to use my academic background and programming skills on actual real-world projects. In my first year, we covered some of the key units like programming, where we used the fundamentals of Java to create a small gaming project, second; we covered the web development unit where we worked on the front-end side of the website, as well as we did database and so on.

At The Manchester College, Openshaw Campus, I finished my BTEC Extended Diploma in Computing. I worked on real-world projects while gaining important work experience with businesses like Silverchip and the Nicholson Academy. Through these experiences, I was able to broaden my knowledge of the industry and develop transferrable talents like teamwork, leadership, communication, negotiating, and analytical capabilities. My objective is to keep improving professionally, strengthening my skills, and assuming more responsibility as a software engineer.

            </p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div class="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.2, cursor: 'pointer' }}
                class="flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Next Page
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.5, backgroundColor: 'white', cursor: 'pointer' }}
                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-pink-400 ml-4"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hello;
