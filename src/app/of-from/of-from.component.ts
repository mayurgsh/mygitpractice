import { Component, OnInit } from '@angular/core';
import { from, of, toArray } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let result=from([1,3,4,5,6,5]);
    result.pipe(toArray()).subscribe(res=>{
      console.log(res);
     
      
      
    })
  }

}
