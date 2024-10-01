import React from 'react'
import { animate, delay, motion } from 'framer-motion'
import { useState } from 'react'
import Recipe from '../assets/recipe.png'
import Fly from '../assets/fly.png'
import Chirrup from '../assets/chirrup.png'

const fadeAnimation={
  initial:{
    opacity:0,
    y:100
  },
  animate:(index)=>({
    opacity:1,
    y:0,
    transition:{
      delay:0.05*index
    }
  }
    

  )
}

function Project() {

  const [skills, setSkills]= useState(['Java (OOPS)', 'HTML', 'CSS', 'JavaScript', 'Tailwind', 'React.js', 'Vue.js','Node.js' , 'Express.js', 'MySQL', 'Firebase(Basics)', 'Framer Motion', 'Design Patterns', 'C# (Basics)', 'Typescript (Basics)', 'Data Structures and Algorithms (Basics)', 'GitHub', 'Postman'])
  


  return (
   <motion.section initial={{y:'200vh'}} animate={{y:0}} transition={{ duration:1.2}} class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col mb-3">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        
        <div className='h-32 w-[90.6%] flex'>
        <h1 class="sm:w-2/5 text-gray-300 font-medium title-font text-2xl mb-2 sm:mb-0">Skills</h1>
        <div className='flex justify-center items-center flex-wrap'>
        {
          skills.map((items, index)=>
          <motion.div variants={fadeAnimation} initial='initial' whileInView='animate' viewport={{once:true}} custom={index} whileHover={{scale:1.1}} className=' py-[2px] px-1 rounded-lg shadow-lg text-white bg-slate-500 ml-2 mb-2'>
         {items}
        </motion.div>)
        }
        
        
       
        </div>
        </div>
        
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 mt-10">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <motion.div whileHover={{scale:1.1, cursor:'pointer'}} class="rounded-lg h-64 overflow-hidden">
          <img  alt="content" class="object-cover object-center h-full w-full" src={Chirrup}/>
        </motion.div>
        <h2 class="text-xl font-medium title-font text-white mt-5 underline">Twitter Clone</h2>
        <p class="text-base leading-relaxed mt-2 text-white">Built a full-stack Twitter clone using modern tech-stack. Implemented key features like user authentication, profile management, post creation, and interactions (likes, follows).
Developed a custom RESTful API for smooth front-end and back-end integration, designed an optimised database schema and ensured responsive design for all devices- HTML, Tailwind, JavaScript, Node.js, Express.js, Vue.js, MySQL, CSS, MVC Pattern.
</p>
        <motion.a href='https://github.com/Vicky00711/Chirrup-Fullstack' whileHover={{scale:1.2}} class="text-indigo-300 inline-flex items-center mt-3">GitHub
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </motion.a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <motion.div whileHover={{scale:1.1, cursor:'pointer'}}  class="rounded-lg h-64 overflow-hidden">
          <img  alt="content" class="object-cover object-center h-full w-full" src={Fly}/>
        </motion.div>
        <h2 class="text-xl font-medium title-font text-white mt-5 underline">The Fly Swatter Game</h2>
        <p class="text-base leading-relaxed mt-2 text-white">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <motion.a href='https://github.com/Vicky00711/Flyswatgame' whileHover={{scale:1.2}} class="text-indigo-300 inline-flex items-center mt-3">GitHub
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </motion.a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <motion.div whileHover={{scale:1.1, cursor:'pointer'}} class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Recipe}/>
        </motion.div>
        <h2 class="text-xl font-medium title-font text-white mt-5 underline">Recipe Finder</h2>
        <p class="text-base leading-relaxed mt-2 text-white">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <motion.a href='https://github.com/Vicky00711/newrecipe' whileHover={{scale:1.2}} class="text-indigo-300 inline-flex items-center mt-3">GitHub
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </motion.a>
      </div>
    </div>
  </div>
</motion.section>
  )
}

export default Project