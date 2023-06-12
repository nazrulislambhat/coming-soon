import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <>
      <div className="absolute z-10 top-0 min-h-screen min-w-screen  bg-slate-800 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-sky-100 shadow-xl rounded-lg p-16 flex justify-center"
        >
          <div className="mr-8">
            <h1 className="text-9xl font-bold text-cyan-500">Coming Soon</h1>
            <p className="text-slate-700 text-3xl mt-4">
              Stay tuned for our exciting new website.
            </p>
            <p className="text-slate-700 font-bold text-xl mt-4">
              Our website surpasses the simplicity of this page.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              src="https://media.istockphoto.com/id/1339139937/vector/coming-soon-hanging-sign.jpg?s=612x612&w=0&k=20&c=SI_YA3ZxNlcCK4rAYnXZoupFyMGQZyK_GQJZFqGvEp4="
              alt="Component 1"
              className="shadow-2xl	rounded-xl bg-gray-200 w-128 h-128"
            />
            {/* Add more components if needed */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ComingSoon;
