import React, { useRef, useEffect } from 'react';
import { animate, createCamera, createCube, createRenderer, createScene } from 'threejs/ThreeSetup';

function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer(mountRef.current);
    const cube = createCube();

    scene.add(cube);

    const frameId = animate(renderer, scene, camera, cube);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={mountRef} />;
}

export default ThreeScene;
