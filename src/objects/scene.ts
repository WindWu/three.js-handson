import Land from './land/land';
import Flower from './flower/flower';
import BasicLights from './lights';
import { Group } from 'three';

export default class SeedScene extends Group {
  constructor() {
    super();

    const land = new Land();
    const flower = new Flower();
    const lights = new BasicLights();

    this.add(land, flower, lights);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}