import { CallToAction } from '@/components/organisms/call-to-action'
import { HeroMitra, CategoryMitra } from '@/components/organisms/mitra'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroMitra />
      <CategoryMitra />
      <CallToAction />
    </GeneralLayout>
  )
}
