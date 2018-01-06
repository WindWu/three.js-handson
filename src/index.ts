export * from './HelloWorld/HelloWorld';
import * as _ from 'lodash';
export function  Test() {
  const hello = _.padStart("Hello TypeScript!", 20, " ");
  console.log(hello)
}
