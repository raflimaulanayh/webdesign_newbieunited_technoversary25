import { CallToAction } from '@/components/organisms/call-to-action'
import { HeroRegist, RegisterForm } from '@/components/organisms/registrasi'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroRegist />
      <RegisterForm />
      <CallToAction />
    </GeneralLayout>
  )
}
