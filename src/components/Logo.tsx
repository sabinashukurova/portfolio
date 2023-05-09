import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../../public/logo-2.png'

const Motion = motion(Link)

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Motion
                href={""}
                whileHover={{
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.8,
                    borderRadius: "100%",
                }}
                className='w-20 h-20'
            >
                <Image
                    src={logo}
                    alt={"logo"}
                />
            </Motion>
        </div>
    )
}

export default Logo