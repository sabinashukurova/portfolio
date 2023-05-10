import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}: any) => {
    return(
        <>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
                whileHover={{scale: 1.05}}
                initial={{x:0, y:0}}
                whileInView={{x:x, y:y}}
                transition={{duration: 1.5}}
                viewport={{once: true}}
            >
                {name}
            </motion.div>
        </>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold w-full text-8xl text-center mt-64'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
            whileHover={{scale: 1.05}}>
                Web
            </motion.div>
            <Skill name="CSS" x="-3vw" y="-8vw" />
            <Skill name="HTML" x="-22vw" y="2vw" />
            <Skill name="JavaScript" x="20vw" y="6vw" />
            <Skill name="ReactJS" x="0vw" y="12vw" />
            <Skill name="NextJS" x="-16vw" y="-15vw" />
            <Skill name="Firebase" x="-23vw" y="18vw" />
            <Skill name="MobX" x="11vw" y="-12vw" />
            <Skill name="ReactNative" x="35vw" y="-5vw" />
            <Skill name="Redux" x="0vw" y="-22vw" />
            <Skill name="Tailwind CSS" x="19vw" y="18vw" />
        </div>
    </>
  )
}

export default Skills