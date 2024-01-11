import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-36 pb-10 flex flex-col justify-center items-center gap-4">
        <Link href={"/"}><Image src={"logoParkus.svg"} width={180} height={40} alt="Logo Parcus-SK"/></Link>
        <p className="text-sm">Built with ❤️ by <Link href={"https://www.stranianek.dev"} className="underline">Jakub Stranianek</Link></p>
    </footer>
  )
}
