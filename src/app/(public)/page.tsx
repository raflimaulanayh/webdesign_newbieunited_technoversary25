import {
  AwarenessLanding,
  CallToAction,
  CategoryLanding,
  CTALanding,
  DownloadLanding,
  HeroLanding,
  ImpactLanding,
  MapLanding,
  SponsorLanding,
  TestimonialLanding
} from '@/components/organisms/landing'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function LandingPage() {
  return (
    <GeneralLayout>
      <HeroLanding />
      <AwarenessLanding />
      <CategoryLanding />
      <ImpactLanding />
      <CallToAction variant="minimal" />
      <MapLanding />
      <TestimonialLanding />
      <SponsorLanding />
      <CTALanding />
      <DownloadLanding />
    </GeneralLayout>
  )
}
