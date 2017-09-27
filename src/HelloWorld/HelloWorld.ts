import * as THREE from 'three'

import Stats = require('../../libs/stats.js')

export class HelloWorld {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  mesh: THREE.Mesh;
  camera: THREE.Camera;
  stats: any;
  constructor() {

  }
  init() {

    this.stats = Stats();
    this.stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom

    document.body.appendChild( this.stats.dom );
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
    this.stats.update();

  }

  run () {
    this.init();
    this.animate();
  }
}