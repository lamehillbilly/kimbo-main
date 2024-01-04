'use client'
import Image from 'next/image'
import Snowfall from 'react-snowfall'
import {KimboLogo} from './KimboLogo.jsx'
import {IdleKimbo} from './IdleKimbo.jsx'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-[url('/websitebg.png')] bg-[#d2e8ff]">
      <div className='flex w-full h-32'>
        <KimboLogo/>
        <div className="flex  font-black text-5xl items-center drop-shadow-lg">
          KIMBO
        </div>
      </div>
      <div className="md:hidden">
      </div>
      <Snowfall
        // The color of the snowflake, can be any valid CSS color.
        color="#fff"
        // Applied to the canvas element.
        // Controls the number of snowflakes that are created (defaults to 150).
        snowflakeCount={200}
      />
      <IdleKimbo/>
    </main>
  )
}
