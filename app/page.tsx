'use client'
import localFont from 'next/font/local'
import Snowfall from 'react-snowfall'
import {KimboLogo} from './KimboLogo.jsx'
import {IdleKimbo} from './IdleKimbo.jsx'
import {SmallButton} from './SmallButton.jsx'

const myFont = localFont({ src: './dpcomic.ttf' })

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[url('/websitebg.png')] bg-[#d2e8ff] bg-no-repeat bg-bottom">
      <div className='flex w-full h-32'>
        <KimboLogo/>
        <div className="flex  text-7xl items-center drop-shadow-lg">
          <h1 className={myFont.className}>KIMBO</h1>
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
      <SmallButton/>
      <IdleKimbo/>
    </main>
  )
}
