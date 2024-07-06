import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='hidden md:block sm:block lg:hidden'>
      <div className='h-full bg-black pb-8 gap-4 '>
        <div className='flex justify-between p-4 m-5'>
          <div>
            <h2 className='text-white text-xl font-semibold '>Community</h2>
            <div className='inline-flex items-center mt-2'>
              <Image src={'/youtu.png'} alt='youtube' height={28} width={28}/>
              <p className='ml-2 text-white'>YouTube</p>
            </div>
            <div className='flex items-center mt-2'>
              <Image src={'/gitHub.png'} alt='github' height={28} width={28}/>
              <p className='ml-2 text-white'>GitHub</p>
            </div>
          </div>
          <div>
            <h2 className='text-white text-xl font-semibold '>Social Media</h2>
            <div className='inline-flex items-center mt-2'>
              <Image src={'/instagram.png'} alt='instagram' height={28} width={28}/>
              <p className='ml-2 text-white'>Instagram</p>
            </div>
            <div className='flex items-center mt-2'>
              <Image src={'/linkedin.png'} alt='linkedin' height={28} width={28}/>
              <p className='ml-2 text-white'>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
