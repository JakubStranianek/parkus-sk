import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <div className="py-8 text-center flex flex-col justify-center gap-8">
        <h1 className="font-bold text-4xl">Spájame čísla,<br/> vytvárame hodnotu</h1>
        <p className="">Kľúč k úspešnému účtovníctvu.<br/> 
Tu sa začína vaša cesta.</p>
        <hr className="border-black"/>

        <Link href="#sluzby" className="m-auto bg-black text-white px-8 py-4 w-fit rounded-full">Čo ponúkame</Link>

        <Image src={"logoParkus.svg"} width={400} height={100} alt="headerImage" className="w-full"/>
    </div>
  )
}
