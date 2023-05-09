import React from 'react'
import Link from 'next/link'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Icon = () => {
  return (
    <div className='fixed left-6 bottom-40 mb-19'>
      <div className='relative group ml-0.5'>
        <motion.a href={"https://twitter.com/s_sabiiina"} target={"_blank"} whileHover={{y: -2}} ><AiOutlineTwitter className='mb-4' /></motion.a>
        <motion.a href={"https://www.instagram.com/sh_sabiina/"} target={"_blank"} whileHover={{y: -2}} ><AiOutlineInstagram className='mb-4' /></motion.a>
        <motion.a href={"https://github.com/sabinashukurova"} target={"_blank"} whileHover={{y: 2}} ><AiOutlineGithub className='mb-4' /></motion.a>
        <motion.a href={"/"} target={"_blank"} whileHover={{y: 2}} ><AiFillLinkedin className='mb-4' /></motion.a>
      </div>
        <div className='h-60 w-0.5 bg-black absolute left-2'>&nbsp;</div> 
    </div>
  )
}

export default Icon