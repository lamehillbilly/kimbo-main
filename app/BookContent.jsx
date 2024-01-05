import localFont from 'next/font/local'
import Link from 'next/link';
const myFont = localFont({ src: './dpcomic.ttf' })

export const BookContent = () => (
  <>
    <div className="p-8 justify-center flex w-[800px] h-[370px] bg-[url('/main-content.png')] bg-no-repeat max-md:hidden text-2xl">
      <div className={myFont.className}>
        <div className="text-3xl font-bold text-center">KIMBO is the #1 dog coin on the Avalanche Blockchain.</div>
        <div className=" pt-5 flex w-full justify-center items-center text-center">
          
          
          
          

        </div>
        <div className="flex font-bold text-center flex-col m-5 "> 🪙69,420,000,000 Tokens🪙</div>
        <div className="flex flex-col text-center items-center m-5"><Link href="https://snowtrace.io/tx/0xc3482f010b53a8a5681f5054d590200b896a711ae28c786aefe74c1250814f0f">🔥Liquidity Burned🔥</Link></div>
        <div className="flex font-bold text-cente m-5 flex-col"><div className="flex flex-col text-center">❌Contract Renounced❌</div> </div>
        <div className="flex font-bold text-cente m-5 flex-col text-center"><div className="flex flex-col text-center">Contract:</div> <div className="flex flex-col text-[22px]"><Link href="https://snowtrace.io/token/0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1"> 0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1</Link></div></div>
      </div>
    </div>

    <div className="justify-center flex  md:hidden text-2xl overflow-hidden bg-[#1f294a] m-4 rounded-lg bg-opacity-65 py-4">
      <div className={myFont.className}>
        <div className="text-3xl font-bold text-center">KIMBO is the #1 dog coin on the Avalanche Blockchain.</div>
        <div className=" pt-5 flex w-full justify-center items-center text-center">
          
          
          
          

        </div>
        <div className="flex font-bold text-center flex-col m-5 "> 🪙69,420,000,000 Tokens🪙</div>
        <div className="flex flex-col text-center items-center m-5"><Link href="https://snowtrace.io/tx/0xc3482f010b53a8a5681f5054d590200b896a711ae28c786aefe74c1250814f0f">🔥Liquidity Burned🔥</Link></div>
        <div className="flex font-bold text-cente m-5 flex-col"><div className="flex flex-col text-center">❌Contract Renounced❌</div> </div>
        <div className="flex font-bold text-cente m-5 flex-col text-center"><div className="flex flex-col text-center">Contract:</div> <div className="flex flex-col text-[22px] underline"><Link href="https://snowtrace.io/token/0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1"> CLICK HERE</Link></div></div>
      </div>
    </div>
    </>
  );
  