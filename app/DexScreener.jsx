import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from 'next/font/local'
const myFont = localFont({ src: './dpcomic.ttf' })

export const DexScreener = () => (
  <>
  <div className="flex justify-center items-center  w-full max-md:flex-col">
   <div className="mx-4">
   <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <Link href="https://dexscreener.com/avalanche/0x03a5888726667fff1e753fc06b51dd1245e7371a">
  <Image
  width={64}
  height={47}
  src={'/dexscreener.png'}
  alt="DexScreener Link"
  /> </Link>
  <div className={`${myFont.className} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
    DexScreener
  </div>
  </motion.div>
  </div>
  <div className="mx-4 text-center">
   <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <Link href="https://traderjoexyz.com/avalanche/trade?inputCurrency=AVAX&outputCurrency=0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1">
  <Image
  width={64}
  height={47}
  src={'/joelogo.png'}
  alt="DexScreener Link"
  /> </Link>
  <div className={`${myFont.className} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
    Trader Joe
  </div>
  </motion.div>
  </div>
  <div className="mx-4">
   <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <Link href="https://pharaoh.exchange/swap">
  <Image
  width={64}
  height={47}
  src={'/pharaohlogo.png'}
  alt="DexScreener Link"
  /> </Link>
  <div className={`${myFont.className} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
    PHARAOH
  </div>
  </motion.div>
  </div>
  
  </div>

  </>
  );
  