"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
const faqs = [
    {
      question: "Podpora biznisu viac než 17 rokov",
      answer:
        "Sme s vami už viac ako 17 rokov, poskytujúc spoľahlivú podporu pre váš biznis. V rámci našich služieb sa snažíme efektívne odľahčiť konateľa od rôznych záväzkov, vrátane komplexného spracovania účtovníctva pre právnické aj fyzické osoby. Naša firma sa neustále snaží inovovať a prispievať k úspechu vášho podnikania prostredníctvom profesionálnych a presných služieb.",
      image: "podpora.jpg"
    },
    {
        question: "Účtovníctvo a mzdy na mieru",
        answer:
          "Zabezpečujeme spracovanie miezd a vedenie personálnej agendy. Celý benefit v užívaní externej spoločnosti na spracovanie účtovníctva spočíva hlavne v ušetrení nákladov na vlastnú účtovníčku alebo účtovníka, a s tým aj spojený účtovný softvér a vlastnú počítačovú techniku, čo v dnešnej dobe nie je lacné.",
          image: "sluzbyNaMieru.jpg"
        },
      {
        question: "Prečo my?",
        answer:
          "Sme spoločnosť, ktorá vám pomôže založiť a rozbehnúť váš biznis na Slovensku a poskytne vám služby pre plynulý chod vašej obchodnej spoločnosti. Naša skúsenosť a prax v spolupráci s advokátskou kanceláriou a daňovým poradcom nám umožňujú poskytovať korektné odpovede na vaše otázky z pracovnej oblasti, personálnej a obchodnej.",
          image: "precoMy.jpg"
        },
  ]

export default function About() {
  return (
    <div className="py-8 text-center flex flex-col justify-center gap-8 lg:pt-48" id='o-nas'>
         <h1 className="font-bold text-4xl">Spoznajte nás</h1>
         <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 lg:items-center">
                        <div className='flex items-center gap-8'>
                          <Image src={"/images/" + faq.image} width={300} height={150} alt="headerImage" className="hidden lg:block w-[300px] h-auto"/>
                          <span className="text-base font-semibold leading-7 lg:text-2xl">{faq.question}</span>
                        </div>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 animate-fade-down">
                      <p className="text-base text-left leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

        <div className='mt-16 lg:flex lg:items-center lg:flex-row-reverse lg:gap-16'> 
          <Image src={"/images/aboutImage.jpg"} width={800} height={600} alt="headerImage" className="w-full lg:w-1/2"/>
        
          <div className='mt-8 lg:w-1/2'>
            <h1 className="font-bold text-left text-4xl">Náš tím</h1>
            <p className="text-left mt-4 w-3/4">Náš tím tvoria kmeňoví zamestnanci, ale aj externí dodávatelia služieb, ktorí však pracujú spolu s kmeňovými zamestnancami v sídle našej spoločnosti. Tvoríme jednotný profesionálny, navzájom sa doplňujúci tím ľudí, ktorých práca baví. 
          <br/><br/>
          Pravidelne absolvujeme odborné školenia, právnu podporu nám poskytujú právna kancelária a daňové poradenstvo externý daňový poradca. Všetci členovia tímu majú dlhoročné skúsenosti v obore a zaručujú profesionalitu, vysokúodbornosť a zodpovednosť každej vykonanej práce.</p>
          </div>
        </div>
    </div>
  )
}
