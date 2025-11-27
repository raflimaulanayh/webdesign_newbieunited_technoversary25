'use client'

import { TESTIMONIAL_DATA } from '@/constants/testimonial-data'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/atoms/ui/carousel'

import { cn } from '@/utils/cn'

export const TestimonialCarousel = () => {
  return (
    <Carousel
      id="testimonials"
      opts={{
        align: 'start'
      }}
      className="relative mx-auto w-full max-w-[900px]"
    >
      <CarouselContent className="-ml-4 py-5">
        {TESTIMONIAL_DATA.map((item, index) => {
          return (
            <CarouselItem key={index} className={cn('min-w-full pl-4 sm:min-w-[50%] md:basis-1/2')}>
              <motion.figure
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex h-full flex-col justify-between gap-5 rounded-xl border border-slate-300 bg-white px-5 py-5 transition-colors hover:border-accent-orange lg:px-7"
              >
                <blockquote className="prose max-w-none text-slate-800">
                  <p className="leading-relaxed">&quot;{item.quote}&quot;</p>
                </blockquote>

                <figcaption className="flex items-center gap-4 border-t border-slate-300 pt-2.5">
                  <Image src={item.avatar} alt={item.name} width={50} height={50} className="rounded-full object-cover" />

                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      <CarouselPrevious
        aria-label="Previous testimonials"
        className="group absolute top-1/2 -left-4 z-10 -translate-y-1/2 border-none bg-transparent shadow-none hover:opacity-80 lg:-left-16"
        customArrow={<ChevronLeftIcon className="size-8 text-slate-700" />}
      />
      <CarouselNext
        aria-label="Next testimonials"
        className="group absolute top-1/2 -right-4 z-10 -translate-y-1/2 border-none bg-transparent shadow-none hover:opacity-80 lg:-right-16"
        customArrow={<ChevronRightIcon className="size-8 text-slate-700" />}
      />
    </Carousel>
  )
}
