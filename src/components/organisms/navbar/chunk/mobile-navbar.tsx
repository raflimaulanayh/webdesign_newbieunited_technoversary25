import { MENU } from '@/constants/menu'
import { HeadsetIcon, XIcon } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/atoms/ui/button'
import { Container } from '@/components/templates/container'

import { cn } from '@/utils/cn'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const MobileNavbar = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.header
          className="fixed top-0 right-0 z-[99] h-screen w-full origin-top-right bg-white lg:hidden"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 16
          }}
        >
          <Container className="flex items-center justify-between py-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 16 }}
            >
              <Link href="/">
                <Image src="/static/images/logo.png" alt="Logo of Meal Up" width={95} height={50} />
              </Link>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(false)}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-secondary/10 hover:bg-secondary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 16 }}
            >
              <XIcon className="size-6 text-primary" />
            </motion.button>
          </Container>

          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-10 py-20">
            {MENU.map((item, index) => (
              <motion.div
                key={item.url}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  delay: 0.1 + index * 0.06,
                  type: 'spring',
                  stiffness: 260,
                  damping: 14
                }}
              >
                <Link
                  href={item.url}
                  className="group relative text-xl font-semibold text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-[2px] bg-primary transition-all',
                      pathname === item.url ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1 + MENU.length * 0.06,
                type: 'spring',
                stiffness: 260,
                damping: 14
              }}
            >
              <Button url="/chatbot" rounded="full" className="size-10 justify-center">
                <HeadsetIcon className="size-7" />
              </Button>

              <Button variant="outline-green" url="/mitra">
                Gabung
              </Button>
            </motion.div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
