'use client'
import Image from 'next/image'
import Snowfall from 'react-snowfall'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[url('/websitebg.png')] bg-[#d2e8ff]">
      <div className='flex w-full h-32'>
        <div className="flex w-[100px] h-[100px] bg-[url('/kimbotoken-export.gif')] hover:bg-[url('/kimbotoken.gif')] m-4">
        </div>
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
      <div className="absolute bottom-10 right-20 max-lg:invisible">
        <Image
        src="/kimbogood.gif"
        width={174}
        height={262}
        alt="Good Boy Kimbo on the snowy avalanche"
        />
      </div>
    </main>
  )
}
