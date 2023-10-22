import * as THREE from 'three';

export const createScene = () => new THREE.Scene();

export const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  return camera;
};

export const createRenderer = (mount) => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  mount.appendChild(renderer.domElement);
  return renderer;
};

export const createCube = () => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  return new THREE.Mesh(geometry, material);
};

export const animate = (renderer, scene, camera, cube) => {
  function animation() {
    const frameId = requestAnimationFrame(animation);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

    return frameId;
  }
  return animation();
};
