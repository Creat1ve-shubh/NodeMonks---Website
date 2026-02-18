"use client";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Josefin_Sans } from 'next/font/google';
import { Pinyon_Script } from 'next/font/google';

const pinyon = Pinyon_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});
const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: '400'
});

const comingSoon = () => {
    return (
        <div className='h-screen w-screen overflow-hidden bg-linear-to-b from-orange-500 to-black flex flex-col items-center '>
            
        </div>
    );
};


{/* <div className="py-[30vh]">
    <div className="text-center text-white underline decoration-wavy decoration-amber-500 text-xl tracking-tight sm:text-6xl">
        <p className={josefin.className}>Prototype Phase: Please Stand By.</p>
    </div>
    <div className='flex flex-col text-center blur-xs items-center justify-center'>
        <DotLottieReact
            src="https://lottie.host/4651317a-d899-46f9-b9a7-20ed92de6bc7/tlOtDdsGXs.lottie"
            style={{ width: '50%', height: '60vh', marginTop: '2rem' }}
            loop
            autoplay
        />

    </div>
    <h2 className={`${josefin.className} text-amber-400 text-6xl text-center`}> Launching exciting products soon !</h2>
</div> */}

export default comingSoon;