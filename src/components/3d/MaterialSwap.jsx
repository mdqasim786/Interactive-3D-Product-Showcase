import { useEffect } from 'react'
import { useProductStore } from '../../store/useProductStore'
import * as THREE from 'three'

export default function MaterialSwap({ scene }) {
  const activeColor = useProductStore(s => s.activeColor)

  useEffect(() => {
    if (!scene) return
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone()
        child.material.color.set(new THREE.Color(activeColor))
      }
    })
  }, [activeColor, scene])

  return null
}