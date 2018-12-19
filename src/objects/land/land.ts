import { Group, ObjectLoader } from "three";

const MODEL = require('./land.json');

export default class Land extends Group {
  constructor() {
    const loader = new ObjectLoader();
    
    super();

    this.name = 'land';
    loader.load(MODEL as any, (mesh)=>{
      this.add(mesh);
    });
  }
}
