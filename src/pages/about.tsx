import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
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
                    <AnimatedText text="Passion Fuels Purpose!" />
                    <div className='grid grid-cols-8 w-full gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default about