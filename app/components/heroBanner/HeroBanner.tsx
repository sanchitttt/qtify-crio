import Image from 'next/image'
import React from 'react'

function HeroBanner() {
    return (
        <div className='w-[100vw] flex items-center  py-[20px] justify-center bg-black'>
            <Image
                src='/heroBanner.svg'
                width={799}
                height={212}
                alt='Hero banner'
            />
        </div>
    )
}

export default HeroBanner