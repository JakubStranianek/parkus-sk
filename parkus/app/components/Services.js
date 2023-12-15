import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import data from "../data.json"

export default function Services() {
  return (
    <div className="mt-8">
        <h1 className="font-bold text-4xl" id="sluzby">Aké služby ponúkame?</h1>
        <ul className="mt-16 grid gap-16 lg:grid-cols-3">           
                {data.services.map((service) => {
                    return (      
                        <li className="py-16 rounded-2xl bg-white shadow-custom" key={service.image}>                  
                            <div className="w-4/5 h-full m-auto flex flex-col items-center justify-center gap-4">
                                <Image src={`/images/${service.image}`} width={300} height={300} alt="uctovnictvo"/>
                                <h2 className="font-bold text-4xl px-4">{service.name}</h2>
                                <hr className="border-black w-full"/>
                                <Link href={"/"} className="flex items-center gap-3">
                                    <p>Pozrieť viac</p>
                                    <ArrowLongRightIcon className="w-6 h-auto"/>
                                </Link>
                            </div>
                        </li>
                    )
                })}           
        </ul>       
    </div>
  )
}
