import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const camera5 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
camera1.position.z = 2;
camera2.position.z = 2;
camera3.position.z = 2;
camera4.position.z = 2;
camera5.position.z = 0.05;

const canvas1 = document.getElementById("can1") as HTMLCanvasElement;
const canvas2 = document.getElementById("can2") as HTMLCanvasElement;
const canvas3 = document.getElementById("can3") as HTMLCanvasElement;
const canvas4 = document.getElementById("can4") as HTMLCanvasElement;
const canvas5 = document.getElementById("can5") as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({ canvas: canvas1 });
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });
const renderer5 = new THREE.WebGLRenderer({ canvas: canvas5 });

// renderer.setSize(window.innerWidth, window.innerHeight);

new OrbitControls(camera1, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// window.addEventListener("resize", onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  render();
}

function render() {
  renderer.render(scene, camera1);
  renderer2.render(scene, camera2);
  renderer3.render(scene, camera3);
  renderer4.render(scene, camera4);
  renderer5.render(scene, camera5);
}

animate();
