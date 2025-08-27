import { Component, OnInit } from '@angular/core';
import { concatMap, from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor() { }
getdata(val:any){
  return of(val + "videos")
}
  ngOnInit(): void {
  
    let source=from(["tech","news","comedy"])
    source.pipe(
      concatMap(res=>this.getdata(res)),
    
    ).subscribe(res=>{
      console.log(res);
      
    })
  }

}
