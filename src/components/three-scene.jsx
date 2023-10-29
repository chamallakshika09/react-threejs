import { Button } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';

import { createCamera, createCube, createRenderer, createScene } from 'threejs/three-setup';

import { useSelector } from 'react-redux';
import { selectColor, selectPosition, selectRotation, selectScale } from 'store/cube-slice';
import { ControlPanel } from './control-panel';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const cubeRef = useRef(null);
  const frameIdRef = useRef(null);

  const scale = useSelector(selectScale);
  const rotation = useSelector(selectRotation);
  const position = useSelector(selectPosition);
  const color = useSelector(selectColor);

  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer(mountRef.current);
    const cube = createCube();

    scene.add(cube);
    cubeRef.current = cube;

    const animate = () => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x = rotation.x;
        cubeRef.current.rotation.y = rotation.y;
        cubeRef.current.rotation.z = rotation.z;

        cubeRef.current.scale.set(scale.x, scale.y, scale.z);

        cubeRef.current.position.set(position.x, position.y, position.z);
        cubeRef.current.material.color.set(color);
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, []);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = rotation.x;
      cubeRef.current.rotation.y = rotation.y;
      cubeRef.current.rotation.z = rotation.z;

      cubeRef.current.scale.set(scale.x, scale.y, scale.z);

      cubeRef.current.position.set(position.x, position.y, position.z);
      cubeRef.current.material.color.set(color);
    }
  }, [rotation, scale, position, color]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {showControls && <ControlPanel setShowControls={setShowControls} />}

      {!showControls && (
        <Button
          onClick={() => setShowControls(true)}
          sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}
        >
          Open Controls
        </Button>
      )}
      <div ref={mountRef} />
    </div>
  );
};

export default ThreeScene;
