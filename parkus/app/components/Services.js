"use client"
import Image from "next/image";
import { ArrowLongRightIcon, ArrowLongLeftIcon, ArrowDownLeftIcon } from '@heroicons/react/24/outline'
import data from "../data.json"
import { useState } from "react";

export default function Services() {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="mt-8">
            <h1 className="font-bold text-4xl" id="sluzby">Aké služby ponúkame?</h1>
            <ul className="mt-16 grid gap-16 lg:grid-cols-3">           
                {data.services.map((service) => {
                    return (      
                        <li className={`py-16 rounded-2xl bg-white shadow-custom transition-transform duration-500 ease-in-out ${selectedCard === service.name ? 'scale-x-[-1]' : ''}`} key={service.image}>                                             
                            {selectedCard === service.name ? 
                                <div className={`w-4/5 h-full m-auto flex flex-col items-center justify-between gap-4 ${selectedCard === service.name ? 'scale-x-[-1]' : ''}`}>
                                    <ul className="flex flex-col gap-4 justify-between list-disc">
                                        {service.nameOfService.map((index) => {
                                            return (                                            
                                                <li>{index.serviceName}</li>                                            
                                            )
                                        })}
                                    </ul>
                                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => {setSelectedCard(null)}}>                                       
                                        <p>Vrátiť späť</p>
                                        <ArrowLongLeftIcon className="w-6 h-auto"/>
                                    </div> 
                                </div>
                            :
                                <div className="w-4/5 h-full m-auto flex flex-col items-center justify-center gap-4">
                                    <Image src={`/images/${service.image}`} width={300} height={300} alt="uctovnictvo"/>
                                    <h2 className="font-bold text-4xl px-4">{service.name}</h2>
                                    <hr className="border-black w-full"/>
                                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => {setSelectedCard(service.name)}}>
                                        <p>Pozrieť viac</p>
                                        <ArrowLongRightIcon className="w-6 h-auto"/>
                                    </div>
                                </div>
                            }
                        </li>
                    )
                })}           
            </ul>
        </div>
    )
}