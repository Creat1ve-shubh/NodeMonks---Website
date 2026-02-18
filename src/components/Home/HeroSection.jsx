"use client"
import { useState, useEffect } from "react";
import { Pinyon_Script } from 'next/font/google';
import SplashScreen from "../SplashScreen";
import { BeamsBackground, EtheralShadow } from "../LandingAnimation";

const pinyon = Pinyon_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function HeroSection() {
    return (
        <div id="landing" className="h-screen w-screen flex justify-center items-center overflow-hidden relative">
            <BeamsBackground intensity="strong" />
            <span className="absolute text-white text-3xl lg:text-7xl max-w-2/3 font-semibold text-center">
                Turning bold ideas into <br />
                <span className={pinyon.className}>Pixel-Perfect Experiences </span>, crafted for impact and engineered for{" "}
                <span className={pinyon.className}>delight</span>.
            </span>
        </div>
    );
}