import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  print(val: any,elcontainer:any) {

    let e1 = document.createElement("li")
    e1.innerHTML = val
    document.getElementById(elcontainer)?.appendChild(e1)
  }
}
