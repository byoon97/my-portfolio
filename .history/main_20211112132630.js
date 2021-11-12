import "./style.css";
import * as THREE from "three";
import bgURL from "./bg.jpeg";
import selfieURL from "./selfie.jpeg";
import nextURL from "./next.jpeg";
import jsURL from "./js.png";
import reduxURL from "./redux.png";
import tailwindURL from "./tailwind.png";

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Background

const spaceTexture = new THREE.TextureLoader().load(bgURL);
scene.background = spaceTexture;

// Avatar

const meTexture = new THREE.TextureLoader().load(selfieURL);

const me = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: meTexture })
);

//Profecencies

scene.add(me);

const cssTexture = new THREE.TextureLoader().load("tailwind.png");
const css = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: cssTexture })
);

scene.add(css);
css.position.y = 5;
css.position.z = 20;
css.position.x = 1;

const htmlTexture = new THREE.TextureLoader().load("redux.png");
const html = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: htmlTexture })
);

scene.add(html);
html.position.y = 0;
html.position.x = -4.5;
html.position.z = 20;

const jsTexture = new THREE.TextureLoader().load("js.png");
const js = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: jsTexture })
);

scene.add(js);
js.position.y = 0;
js.position.x = 4.5;
js.position.z = 20;

const nextTexture = new THREE.TextureLoader().load("next.jpeg");
const next = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: nextTexture })
);

scene.add(next);
next.position.y = -5;
next.position.x = -3;
next.position.z = 20;

const reactTexture = new THREE.TextureLoader().load("react.png");
const react = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: reactTexture })
);

scene.add(react);
react.position.y = -5;
react.position.x = 3.5;
react.position.z = 20;

me.position.z = -5;
me.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  //   moon.rotation.x += 0.05;
  //   moon.rotation.y += 0.075;
  //   moon.rotation.z += 0.05;

  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  camera.position.z = t * -0.02;
  camera.position.x = t * -0.0004;
  camera.rotation.y = t * -0.0004;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  css.rotation.x += 0.01;
  css.rotation.y += -0.005;
  css.rotation.z += 0.01;

  html.rotation.x += 0.02;
  html.rotation.y += 0.01;
  html.rotation.z += 0.01;

  js.rotation.x += -0.01;
  js.rotation.y += -0.005;
  js.rotation.z += -0.01;

  react.rotation.x += -0.01;
  react.rotation.y += -0.005;
  react.rotation.z += 0.01;

  next.rotation.x += 0.01;
  next.rotation.y += 0.005;
  next.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
