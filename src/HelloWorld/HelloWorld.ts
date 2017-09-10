import * as THREE from 'three'
import * as _ from 'lodash';
export class HelloWorld {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  mesh: THREE.Mesh;
  camera: THREE.Camera;
  init() {
    this.scene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight

    this.camera = new THREE.PerspectiveCamera(75, aspect, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer.render(this.scene, this.camera);

  }

  run () {
    this.init();
    this.animate();
  }
}