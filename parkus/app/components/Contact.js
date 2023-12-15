import { MapPinIcon, UserIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Contact() {
  return (
    <div id='kontakt'>
        <h1 className="font-bold text-4xl">Kde nás najdete?</h1>
  
        <div className='my-8 flex gap-8'>
          <MapPinIcon className='w-8 h-8' />
          <div>
            <h2 className="font-bold text-2xl">Sídlo firmy</h2>
            <p>Pittsburgská 17, 010 01 Žilina</p>
            <h2 className="font-bold text-2xl mt-4">Kancelária</h2>
            <p>Sidónie Sakalovej 141/7, 014 01 Bytča</p>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.7617542591877!2d18.55839455153413!3d49.222151936099024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47145942ee69cad3%3A0x631f1f88bba776e7!2sPARCUS%20-%20SK%2C%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1702475922899!5m2!1ssk!2ssk" width="600" height="450" className="w-full border-none" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className='my-8 flex gap-8'>
          <UserIcon className='w-8 h-8' />
          <div>
            <h2 className="font-bold text-2xl">Kontaktná osoba</h2>
            <p>Andrea Kočišová</p>        
          </div>
        </div>
        
        <div className='my-8 flex gap-8'>
          <PhoneIcon className='w-8 h-8' />
          <div>
            <h2 className="font-bold text-2xl">Telefón</h2>
            <Link href="tel:+421911499135">+421 911 499 135</Link>        
          </div>
        </div>
        
        <div className='my-8 flex gap-8'>
          <EnvelopeIcon className='w-8 h-8' />
          <div>
            <h2 className="font-bold text-2xl">Email</h2>
            <Link href="mailto:info@parcus.sk">info@parcus.sk</Link>   
          </div>
        </div>
    </div>
  )
}
