import {
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  WhatsappLogoIcon,
  YoutubeLogoIcon
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/templates/container'

const HELP_LINKS = [
  { href: '/', label: 'Cara Pesan' },
  { href: '/chatbot', label: 'FAQ (Tanya Jawab)' },
  { href: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
  { href: '/syarat-ketentuan', label: 'Syarat dan Ketentuan' }
]

const COMPANY_LINKS = [
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/blog', label: 'Blog & Edukasi' },
  { href: '/mitra', label: 'Gabung Mitra' }
]

const CONTACT_INFO = [
  {
    href: 'mailto:hello@mealup.my.id',
    label: 'Email',
    icon: EnvelopeIcon,
    text: 'hello@mealup.my.id'
  },
  {
    href: 'tel:6281234567890',
    label: 'Phone Number',
    icon: PhoneIcon,
    text: '0812-3456-7890'
  }
]

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/mealup.my.id', label: 'Instagram', icon: InstagramLogoIcon },
  { href: 'https://wa.me/6281234567890', label: 'WhatsApp', icon: WhatsappLogoIcon },
  { href: 'https://linkedin.com/mealup-my-id', label: 'LinkedIn', icon: LinkedinLogoIcon },
  { href: 'https://youtube.com/mealup-my-id', label: 'YouTube', icon: YoutubeLogoIcon }
]

const STORE_LINKS = [
  {
    href: 'https://play.google.com/store',
    label: 'Play Store',
    src: '/static/icons/store/play-store.svg'
  },
  {
    href: 'https://www.apple.com/id/app-store',
    label: 'App Store',
    src: '/static/icons/store/app-store.svg'
  }
]

export const Footer = () => (
  <footer className="w-full bg-primary">
    <h2 className="sr-only">Meal Up Footer</h2>

    <Container className="flex flex-col justify-between gap-8 py-10 md:flex-row lg:gap-10 lg:py-16">
      <div className="flex flex-col gap-y-6 text-xl font-semibold text-white">
        <Link href="/">
          <Image
            src="/static/images/logo-white.png"
            alt="Logo of Meal Up"
            width={280}
            height={215}
            className="w-52 object-contain lg:w-70"
          />
        </Link>
        <p className="max-w-72">Level Up Your Food, Zero Down The Waste</p>
      </div>

      <FooterSection title="Bantuan" links={HELP_LINKS} />

      <FooterSection title="Perusahaan" links={COMPANY_LINKS} />

      <div className="flex flex-col items-start gap-4 font-semibold text-white">
        <h3 className="bg-white px-2.5 font-bold text-primary">Meal Up Indonesia</h3>

        <a
          href="https://maps.app.goo.gl/v2gio1zAipFWeYLNA"
          target="_blank"
          className="max-w-67"
          aria-label="Alamat"
          rel="noreferrer"
        >
          Jl. BKR No.63, Ancol, Kec. Regol, Kota Bandung, Jawa Barat 40253
        </a>

        <nav className="flex flex-col gap-3">
          {CONTACT_INFO.map(({ href, label, icon: Icon, text }) => (
            <a key={href} href={href} className="flex items-center gap-2 hover:underline" aria-label={label}>
              <Icon size={24} />
              {text}
            </a>
          ))}
        </nav>

        <nav className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={24} />
            </a>
          ))}
        </nav>

        <nav className="flex items-center gap-5 py-2.5">
          {STORE_LINKS.map(({ href, label, src }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:opacity-80"
            >
              <Image src={src} alt={`Logo of ${label}`} width={125} height={36} />
            </a>
          ))}
        </nav>
      </div>
    </Container>

    <Container className="border-t border-white py-3 font-bold text-white max-sm:text-sm">
      <p className="mb-3">
        © {new Date().getFullYear()} Meal Up Indonesia. Hak Cipta Dilindungi. Didesain & Dikembangkan untuk Kompetisi
        Technoversary {new Date().getFullYear()}.
      </p>
    </Container>
  </footer>
)

const FooterSection = ({ title, links }: { title: string; links: Array<{ href: string; label: string }> }) => (
  <div className="space-y-2.5 text-white">
    <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
    <nav className="flex flex-col gap-y-1 font-medium">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="hover:underline">
          {label}
        </Link>
      ))}
    </nav>
  </div>
)
