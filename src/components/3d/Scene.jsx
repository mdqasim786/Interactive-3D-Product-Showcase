import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { useProductStore } from '../../store/useProductStore'
import MaterialSwap from './MaterialSwap'

export default function Scene() {
  const { scene } = useGLTF('/models/sneaker.glb')

  return (
    <>
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        minDistance={1.5}
        maxDistance={5}
      />
      <Environment preset="city" />
      <MaterialSwap scene={scene} />
      <primitive object={scene} />
    </>
  )
}