'use client'

import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Navbar = dynamic(() => import('@/components/organisms/navbar').then((mod) => mod.Navbar), {
  ssr: false,
  loading: () => <div className="sticky top-0 h-23 w-full bg-gray-50 shadow-sm" />
})

const Footer = dynamic(() => import('@/components/organisms/footer').then((mod) => mod.Footer), {
  ssr: false
})

interface GeneralLayoutProps {
  children: React.ReactNode
  className?: string
}

export const GeneralLayout = ({ children, className }: GeneralLayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={className}>{children}</div>
      <Footer />
    </Fragment>
  )
}
