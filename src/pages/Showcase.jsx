import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from '../components/3d/Scene'
import LoadingScreen from '../components/ui/LoadingScreen'

export default function Showcase() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }} shadows>
      <Suspense fallback={<LoadingScreen />}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}