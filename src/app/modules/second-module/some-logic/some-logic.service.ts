import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeLogicService {

  constructor() { }

  someFunc(): void {
    const arr = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
    }
  }

  someFunc2(): void {
    const arr = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
    }
  }

  someFunc3(): void {
    const arr = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
    }
  }

  someFunc4(): void {
    const arr = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
    }
  }
}
