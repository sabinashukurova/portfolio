import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from './Logo';

const CustomLink = ({ href, title, className = "" }: any) => {
    const route = useRouter()
    console.log(route)
    return (
        <>
            <Link href={href} className={`${className} relative group`}>
                {title}
                <span className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${route.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        </>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <div className=''>
                <Logo />
            </div>
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/contact" title="Contact" className="ml-4" />
            </nav>
        </header>
    )
}

export default NavBar