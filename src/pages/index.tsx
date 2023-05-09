import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import {BsBoxArrowUpRight} from 'react-icons/bs'
import lightBulb from '../../public/logo.png'

export default function Home() {
  return (
    <main>
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={''}
              alt={''}
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left" />
            <p className="my-4 text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit et laboriosam cum recusandae cupiditate, sapiente iste autem? Nostrum, unde porro soluta, veniam pariatur voluptatibus vitae repellat sunt id obcaecati hic?</p>
            <div className="flex items-center self-start mt-2">
              <Link 
                href="/dummy.pdf" 
                target={"_blank"} 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark' 
                download={true}
              >
                Resume
                <BsBoxArrowUpRight className="w-6 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image 
          src={""} alt="Light Bulb" className="w-full h-auto"
        />
      </div>
    </main>
  )
}
