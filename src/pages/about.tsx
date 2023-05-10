import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skill'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>Sabina | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='w-full flex flex-col items-center justify-center'>
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
                    <div className='grid grid-cols-8 w-full gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, ad fuga quos nihil fugit maxime beatae accusamus, omnis ullam velit ut veniam excepturi possimus ipsum odit doloribus libero quisquam?</p>
                            <p className='my-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, ad fuga quos nihil fugit maxime beatae accusamus, omnis ullam velit ut veniam excepturi possimus ipsum odit doloribus libero quisquam?</p>
                            <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, ad fuga quos nihil fugit maxime beatae accusamus, omnis ullam velit ut veniam excepturi possimus ipsum odit doloribus libero quisquam?</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2rem bg-dark' />
                            <Image src={""} alt="image" className='w-full h-auto rounded-2xl' />
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                <Skills />
                <Experience />
                <Education />
                </Layout>
            </main>
        </>
    )
}

export default about