import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    <group name='Lights'>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form='rect'
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form='rect'
            intensity={10}
            position={[10, 0, 1]}
            // This light is positioned at x=10 (to the right), y=0 (at the same vertical level as the viewer), and z=1 (slightly in front of the viewer). This positioning allows the light to illuminate the scene from the right side, creating highlights and shadows that enhance the three-dimensional appearance of the objects in the scene.
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      <spotLight
      position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />

      <spotLight
      position={[0, -25, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />

      <spotLight
      position={[0, 15, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 0.2}
      />
    </group>
  )
}

export default StudioLights