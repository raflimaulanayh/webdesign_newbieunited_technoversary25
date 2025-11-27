'use client'

import { CTACard } from '@/components/molecules/card/cta-card'
import { Container } from '@/components/templates/container'

export const CallToAction = () => {
  return (
    <Container className="mb-32">
      <CTACard
        title="Siap Level Up Bisnis Kulinermu?"
        description="Ubah overstock makanan menjadi pendapatan tambahan. Balik modal setiap hari, tanpa ada yang terbuang."
        ctaLabel="Daftar sekarang"
        ctaLink="/registrasi"
      />
    </Container>
  )
}
