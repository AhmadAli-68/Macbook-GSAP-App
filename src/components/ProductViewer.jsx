import React from 'react'
import useMacbookStore from '../../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import MacbookModel14 from './models/Macbook-14';
import { AmbientLight } from 'three';
import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher'
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: 'max-width: 1024px' })

  return (
    <section id='product-viewer'>
      <h2>Take a closer look.</h2>

      <div className="controls">
        {/* <p className="info">Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors</p> */}

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor('#adb5bd')}
              className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')} />
            <div
              onClick={() => setColor('#2e2c2e')}
              className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')} />
          </div>

          <div className='size-control'>
            <div
              onClick={() => setScale(0.06)}
              className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        <StudioLights />

        {/* In any three-dimensional space, the position is defined by three coordinates: x, y, and z. The x-coordinate represents the horizontal position, the y-coordinate represents the vertical position, and the z-coordinate represents the depth or distance from the viewer. In this case, the box is positioned at -1 on the x-axis (to the left), 1 on the y-axis (upwards), and 0 on the z-axis (at the same depth as the viewer). */}

        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  )
}

export default ProductViewer