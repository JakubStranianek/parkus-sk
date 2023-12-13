import Link from "next/link";

export default function Banner() {
    return (
      <div className="">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Zaujali sme Vás?
              <br />
              Poďte s nami spolupracovať.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Zaujala Vás naša ponuka a služby? Sme pripravení pre vás prichystať riešenie presne podľa vašich potrieb. Kontaktujte nás ešte dnes a spoločne preskúmajme, ako môžeme podporiť váš biznis a priniesť mu novú úroveň efektívnosti a profesionality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href={"kontakt"}
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Zavolať
              </Link>
              <Link href="#kontakt" className="text-sm font-semibold leading-6 text-gray-900">
                Adresa <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  