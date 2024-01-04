'use client'
import localFont from 'next/font/local'
import Snowfall from 'react-snowfall'
import {KimboLogo} from './KimboLogo.jsx'
import {IdleKimbo} from './IdleKimbo.jsx'
import {SmallButton} from './SmallButton.jsx'
import {BookContent} from './BookContent.jsx'
import {DexScreener} from './DexScreener.jsx'

const myFont = localFont({ src: './dpcomic.ttf' })

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[url('/websitebg.png')] bg-[#d2e8ff] bg-no-repeat bg-bottom justify-center">
      
      <div>
        <div className = "absolute right-0 top-0 mt-8 w-[300px] h-[80px] z-50 max-md:w-[80px]">
        <DexScreener/>
      </div>
      <div className='flex w-full h-32 absolute left-0'>
        <KimboLogo/>
        <div className="flex  text-7xl items-center drop-shadow-lg">
          <h1 className={myFont.className}>KIMBO</h1>
        </div>
      </div>
      <div className="flex "></div>
      </div>
      <div className="flex z-40 h-screen justify-center items-center">
      <BookContent/>
      </div>
      
      <SmallButton/>
      
      <IdleKimbo/>
      <div className='z-1'>
      <Snowfall
        // The color of the snowflake, can be any valid CSS color.
        color="#fff"
        // Applied to the canvas element.
        // Controls the number of snowflakes that are created (defaults to 150).
        snowflakeCount={200}
      />
      </div>
    </main>
  )
}
