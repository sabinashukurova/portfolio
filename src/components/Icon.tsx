import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Icon = () => {
  return (
    <div className='fixed left-6 bottom-40 mb-19'>
      <div className='relative group ml-0.5' >
        <motion.div
          className='w-10 h-10'
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%",
          }}>
          <motion.a href={"https://twitter.com/s_sabiiina"} target={"_blank"}><AiOutlineTwitter className='mb-4 text-blue-500' /></motion.a>
        </motion.div>
        <motion.div
          className='w-10 h-10'
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%",
          }}>
          <motion.a href={"https://www.instagram.com/sh_sabiina/"} target={"_blank"}><AiOutlineInstagram className='mb-4 text-pink-700' /></motion.a>
        </motion.div>
        <motion.div
          className='w-10 h-10'
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%",
          }}>
          <motion.a href={"https://github.com/sabinashukurova"} target={"_blank"}><AiOutlineGithub className='mb-4' /></motion.a>
        </motion.div>
        <motion.div
          className='w-10 h-10'
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%",
          }}>
          <motion.a href={"/"} target={"_blank"}><AiFillLinkedin className='mb-4 text-blue-800' /></motion.a>
        </motion.div>
      </div>
      <div className='h-60 w-0.5 bg-black absolute left-2'>&nbsp;</div>
    </div>
  )
}

export default Icon