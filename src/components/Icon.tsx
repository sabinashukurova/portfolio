import React from 'react'
import Link from 'next/link'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Icon = () => {
  return (
    <div className='fixed left-6 bottom-40 mb-19'>
      <div className='relative group ml-0.5'>
        <Link href={"https://twitter.com/s_sabiiina"} target={"_blank"}><AiOutlineTwitter className='mb-4' /></Link>
        <Link href={"https://www.instagram.com/sh_sabiina/"} target={"_blank"}><AiOutlineInstagram className='mb-4' /></Link>
        <Link href={"https://github.com/sabinashukurova"} target={"_blank"}><AiOutlineGithub className='mb-4' /></Link>
        <Link href={"/"} target={"_blank"}><AiFillLinkedin className='mb-4' /></Link>
      </div>
        <div className='h-60 w-0.5 bg-black absolute left-2'>&nbsp;</div>
    </div>
  )
}

export default Icon