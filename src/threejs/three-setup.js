import * as THREE from 'three';

export const createScene = () => new THREE.Scene();

export const createCamera = (mount) => {
  const width = mount.clientWidth;
  const height = mount.clientHeight;
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;
  return camera;
};

export const createRenderer = (mount) => {
  const width = mount.clientWidth;
  const height = mount.clientHeight;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  mount.appendChild(renderer.domElement);
  return renderer;
};

export const createCube = () => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  return new THREE.Mesh(geometry, material);
};
