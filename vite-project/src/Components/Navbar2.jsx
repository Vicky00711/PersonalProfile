import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <>
      <motion.div
        initial={{ y: "-200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="relative h-12 flex w-full justify-center z-50 opacity-100 "
      >
        <div className="fixed w-full md:w-3/4 flex justify-center ">
          <div className="relative flex border-b-2 h-12 w-full md:w-3/4 top-5 bg-slate-400 rounded-2xl">
            <ul className="flex justify-around h-[100%] w-[100%] items-center flex-wrap">
              <motion.div
                whileHover={{
                  scale: [1.1, 1, 1.1, 1, 1.1, 1],
                  boxShadow: "0px 0px 8px rgba(255,255, 255)",
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-24 md:w-28 text-center rounded-lg hover:shadow-lg cursor-pointer"
              >
                <Link to="/" className="text-white text-sm md:text-base">
                  About Me
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: [1.1, 1, 1.1, 1, 1.1, 1],
                  boxShadow: "0px 0px 8px rgba(255,255, 255)",
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-24 md:w-28 text-center rounded-lg hover:shadow-lg cursor-pointer"
              >
                <Link to="/project" className="text-white text-sm md:text-base">
                  Projects
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: [1.1, 1, 1.1, 1, 1.1, 1],
                  boxShadow: "0px 0px 8px rgba(255,255, 255)",
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-24 md:w-28 text-center rounded-lg hover:shadow-lg cursor-pointer"
              >
                <Link to="/education" className="text-white text-sm md:text-base">
                  Education
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: [1.1, 1, 1.1, 1, 1.1, 1],
                  boxShadow: "0px 0px 8px rgba(255,255, 255)",
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-24 md:w-28 text-center rounded-lg hover:shadow-lg cursor-pointer"
              >
                <Link to="/contact" className="text-white text-sm md:text-base">
                  Contact
                </Link>
              </motion.div>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar2;
