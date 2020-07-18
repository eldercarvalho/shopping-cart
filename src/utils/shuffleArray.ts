import { IProduct } from '../entities/Product';

export function shuffleArray(arr: Array<IProduct>): Array<IProduct> {
  let i = arr.length - 1;
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
