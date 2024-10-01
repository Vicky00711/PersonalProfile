import React from 'react'
import { motion } from 'framer-motion'

function Education() {
  return (
   <motion.section initial={{y:'200vh'}} animate={{y:0}}  transition={{duration:2, delay:1, stiffness:50, type:'spring'}} class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white underline ">BSC Hons Software</span>
          <span className='text-white font-semibold underline'>Engineering</span>
          <span class="mt-1 text-white text-sm">Current</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Manchester Metropolitan University</h2>
          <p class="leading-relaxed text-white">Currently studying: Advanced Programming, Software Development processes, Software/System Design and
          Architecture.
          Previously Studied: Programming (74%), Computer Architecture (84%), Database (90%), Mathematics (98%),
          Introduction to Web Design and Development (90%), Full Stack (96%), Software Design and Architecture(74%), Software Development Processes(85%).</p>
          <motion.a whileHover={{scale:1.2}} class="text-indigo-500 inline-flex items-center mt-4" href='https://www.mmu.ac.uk/'>Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.a>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-white underline">BTEC EXTENDED DIPLOMA IN COMPUTING</span>
          <span class="mt-1 text-gray-500 text-sm">2019-2021</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">THE MANCHESTER COLLEGE, OPENSHAW CAMPUS</h2>
          <p class="leading-relaxed text-white">During my BTEC course, I focused on the principles of computer science and software design and development, with a strong emphasis on programming in languages like C#. In addition to these core areas, I studied website development and cybersecurity, further broadening my technical expertise. I successfully completed the course with a final grade of D*D*D*.</p>
          <motion.a href='https://www.tmc.ac.uk/' whileHover={{scale:1.2}} class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.a>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-white underline">GCSE</span>
          <span class="text-sm text-gray-500"></span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">DALMIA VIDYA MANDIR, INDIA</h2>
          <p class="leading-relaxed text-white">CGPA-9.6</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</motion.section>
  )
}

export default Education