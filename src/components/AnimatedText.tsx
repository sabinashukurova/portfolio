import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const AnimatedText = ({ text, className }: any) => {
    return (
        <div className='w-full mx-auto py-2 flex justify-center text-center items-center overflow-hidden'>
            <motion.h1 className={`inline-block text-dark w-full font-bold capitalize text-8xl ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                <motion.span className='inline-block'
                    variants={singleWord}
                    initial="initial"
                    animate="animate"
                >{text}
                </motion.span>
            </motion.h1>
        </div>
    )
}

export default AnimatedText