import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <div className="w-11/12 animate-fade-down-header m-auto py-8 text-center flex flex-col justify-center gap-8 lg:w-full lg:flex-row-reverse lg:justify-end lg:items-center lg:gap-16 lg:animate-fade-in">
        <div className="w-full flex flex-col lg:justify-start gap-6 lg:text-left">
        <h1 className="font-bold text-4xl lg:text-6xl">Spájame čísla,<br/> vytvárame hodnotu</h1>
        <p className="text-base">Kľúč k úspešnému účtovníctvu. <br className="lg:hidden"/> 
Tu sa začína vaša cesta.</p>
        <hr className="border-black lg:hidden"/>

        <Link href="#sluzby" className="m-auto bg-black text-white px-8 py-4 w-fit rounded-full hover:bg-opacity-80 hover:transition-opacity lg:m-0">Čo ponúkame</Link>
        </div>

        <Image src={"/images/heroImage.jpg"} width={800} height={800} alt="headerImage" className="w-full h-fit lg:w-1/2 lg:rounded-r-xl"/>
    </div>
  )
}
