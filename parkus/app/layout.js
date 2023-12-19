import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PARKUS SK | Profesionálne účtovníctvo, mzdové účtovníctvo a podpora vašej obchodnej spoločnosti',
  description: 'Spoločnosť PARKUS SK vám poskytuje komplexné služby v oblasti účtovníctva, mzdového účtovníctva a personalistiky. Naše odborné tímy vám pomáhajú s efektívnym založením a udržiavaním vašej obchodnej spoločnosti.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
