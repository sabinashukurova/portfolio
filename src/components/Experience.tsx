import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


const Details =({position, company, time, address, work}:any) =>{
    const ref = useRef(null)
    return(
        <>
            <li ref={ref} className='my-8 first:mt-0 last: mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
                <LiIcon reference={ref} />
                <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:"spring"}}>
                    <h3 className='capitalize font-bold text-2xl'>{position}</h3>
                    <h2 className='font-bold text-xl text-blue-600'>{company}</h2>
                    <span className='capitalize font-medium text-dark/75'>
                        {time} | {address}
                    </span>
                    <p className='font-medium w-full'>
                        {work}
                    </p>
                </motion.div>
            </li>
        </>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl w-full mb-32 text-center'>Experience</h2>
        <div ref={ref} className='w-[75%] relative mx-auto'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    position="Front End Developer"
                    company="Soft Solution MMC"
                    time="2021"
                    address="Nariman Narimanov, Baku"
                    work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, ad fuga quos nihil fugit maxime beatae accusamus, omnis ullam velit ut veniam excepturi possimus ipsum odit doloribus libero quisquam?"
                />
                <Details
                    position="Front End Developer"
                    company="Soft Solution MMC"
                    time="2021"
                    address="Nariman Narimanov, Baku"
                    work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, ad fuga quos nihil fugit maxime beatae accusamus, omnis ullam velit ut veniam excepturi possimus ipsum odit doloribus libero quisquam?"
                />
                <Details
                    position="Front End Developer"
                    company="Soft Solution MMC"
                    time="2021"
                    address="Nariman Narimanov, Baku"
                    work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, ad fuga quos nihil fugit maxime beatae accusamus, omnis ullam velit ut veniam excepturi possimus ipsum odit doloribus libero quisquam?"
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience