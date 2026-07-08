import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Splash from '../components/Splash'

export const Route = createFileRoute('/dashboard')({
  component: DashboardSplash,
})

function DashboardSplash() {
  const navigate = useNavigate()

  return (
    <Splash
      duration={1800}
      onDone={() => navigate({ to: '/' })}
    />
  )
}