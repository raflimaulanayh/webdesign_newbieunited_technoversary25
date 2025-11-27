'use client'

import { Button } from '@/components/atoms/ui/button'
import { Container } from '@/components/templates/container'

export const HeroLanding = () => (
  <section className='bg-[url("/static/images/background/bg-hero.png")] bg-cover bg-bottom bg-no-repeat pb-20'>
    <Container className="flex min-h-[50vh] flex-col items-center justify-center gap-8 text-center lg:min-h-[70vh] lg:gap-12">
      <header className="space-y-3 lg:space-y-5">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">Level Up Your Meal!!</h1>
        <p className="mx-auto font-semibold text-slate-600 max-sm:w-10/12 sm:text-lg">
          Nikmati makanan berkualitas dengan <span className="text-accent-orange">diskon 50%</span> tanpa syarat
        </p>
      </header>

      <Button size="lg" url="/mitra">
        Gabung sebagai mitra
      </Button>
    </Container>
  </section>
)
