'use client'

import { motion, Variants } from 'framer-motion'
import dynamic from 'next/dynamic'

import { Container } from '@/components/templates/container'

const TestimonialCarousel = dynamic(() => import('@/components/molecules/carousel').then((mod) => mod.TestimonialCarousel), {
  ssr: false
})

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const carouselContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2
    }
  }
}

export const TestimonialLanding = () => {
  return (
    <section className="py-10 lg:py-16">
      <Container className="flex flex-col gap-5 lg:gap-9">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
        >
          Apa Kata Para Mitra?
        </motion.h2>

        <motion.div
          variants={carouselContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialCarousel />
        </motion.div>
      </Container>
    </section>
  )
}
