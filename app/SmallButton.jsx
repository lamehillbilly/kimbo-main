import Link from "next/link";
export const SmallButton = () => (
  <div className="flex m-4 absolute bottom-0  w-full">
   <Link href="https://t.me/+wG80bcKGaVdmZTU5">
  <div className="flex ml-2 w-[64px] h-[64px] bg-[url('/tg_button_static.png')] hover:bg-[url('/tg_button.gif')]  bg-center">
  </div>
  </Link>
  
  <Link href="https://discord.gg/RzRDHFwbD4">
  <div className="flex ml-2 w-[64px] h-[64px] bg-[url('/dc_button_static.png')] hover:bg-[url('/dc_button.gif')]  bg-center">
  </div>
  </Link>

  <Link href="https://twitter.com/KimboAvax">
  <div className="flex ml-2 w-[64px] h-[64px] bg-[url('/x_button_static.png')] hover:bg-[url('/x_button.gif')]  bg-center">
  </div>
  </Link>
  </div>
  );
  