import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Motion = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <Motion 
            href={"/"} 
            className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold text-2xl'
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                transition:{duration:1, repeat: Infinity}
            }}>SS</Motion>
    </div>
  )
}

export default Logo