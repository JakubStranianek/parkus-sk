"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
const faqs = [
    {
      question: "Podpora biznisu viac než 17 rokov",
      answer:
        "Podporujeme váš biznis už viac ako 17 rokov. Úlohou našej firmy je odbremeniť konateľa aspoň od niekoľkých dôležitých činností, vrátane spracovania účtovníctva pre právnické alebo fyzické osoby.",
    },
    {
        question: "Účtovníctvo a mzdy na mieru",
        answer:
          "Zabezpečujeme spracovanie miezd a vedenie personálnej agendy. Celý benefit v užívaní externej spoločnosti na spracovanie účtovníctva spočíva hlavne v ušetrení nákladov na vlastnú účtovníčku alebo účtovníka, a s tým aj spojený účtovný softvér a vlastnú počítačovú techniku, čo v dnešnej dobe nie je lacné.",
      },
      {
        question: "Prečo my?",
        answer:
          "Sme spoločnosť, ktorá vám pomôže založiť a rozbehnúť váš biznis na Slovensku a poskytne vám služby pre plynulý chod vašej obchodnej spoločnosti. Naša skúsenosť a prax v spolupráci s advokátskou kanceláriou a daňovým poradcom nám umožňujú poskytovať korektné odpovede na vaše otázky z pracovnej oblasti, personálnej a obchodnej.",
      },
  ]

export default function About() {
  return (
    <div className="py-8 text-center flex flex-col justify-center gap-8" id='o-nas'>
         <h1 className="font-bold text-4xl">Spoznajte nás</h1>
         <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-left leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <Image src={"/images/aboutImage.jpg"} width={400} height={400} alt="headerImage" className="w-full"/>
        
        <div className='mt-8'>
          <h1 className="font-bold text-left text-4xl">Náš tím</h1>
          <p className="text-left mt-4">Náš tím tvoria kmeňoví zamestnanci, ale aj externí dodávatelia služieb, ktorí však pracujú spolu s kmeňovými zamestnancami v sídle našej spoločnosti. Tvoríme jednotný profesionálny, navzájom sa doplňujúci tím ľudí, ktorých práca baví. 
        <br/><br/>
        Pravidelne absolvujeme odborné školenia, právnu podporu nám poskytujú právna kancelária a daňové poradenstvo externý daňový poradca. Všetci členovia tímu majú dlhoročné skúsenosti v obore a zaručujú profesionalitu, vysokúodbornosť a zodpovednosť každej vykonanej práce.</p>
        </div>
    </div>
  )
}
