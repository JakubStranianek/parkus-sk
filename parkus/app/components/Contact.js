import { EnvelopeIcon, PhoneIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
export default function Contact() {
  return (
    <div id='kontakt'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.7617542591877!2d18.55839455153413!3d49.222151936099024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47145942ee69cad3%3A0x631f1f88bba776e7!2sPARCUS%20-%20SK%2C%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1702475922899!5m2!1ssk!2ssk" width="600" height="450" className="w-full border-none" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Kontakt</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
              Vaša spätná väzba je pre Nás veľmi dôležitá, a preto sme tu pre Vás. Kedykoľvek budete mať otázky alebo pripomienky,
              nebojte sa Nás kontaktovať a my sa vám budeme snažiť odpovedať čo najrýchlejšie.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <Link href={"tel:+421911499135"}>+421 911 499 135</Link>
                  <p className="mt-1">Andrea Kočišová</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <Link href={"mailto:info@parcus.sk"}>info@parcus.sk</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Adresa</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
              Ak by ste mali záujem o osobnú návštevu, moja adresa je tu pre vás.
              Príďte sa pozrieť do nášho útulného priestoru. V prípade, že si chcete 
              vybaviť niečo osobne, neváhajte a navštívte Nás na nižšie uvedenej adrese. Teším sa na stretnutie!
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <MapIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Sídlo firmy</p>
                  <p className="mt-1">Pittsburgská 17, 010 01 Žilina</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Kancelária</p>
                  <p className="mt-1">Sidónie Sakalovej 141/7, 014 01 Bytča</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
