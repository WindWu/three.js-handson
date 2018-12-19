import { Group, ObjectLoader } from "three";

const MODEL = require('./flower.json');

export default class Flower extends Group {
  constructor() {
    const loader = new ObjectLoader();
    
    super();

    this.name = 'flower';

    loader.load(MODEL as any, (mesh)=>{
      this.add(mesh);
    });
  }
}
