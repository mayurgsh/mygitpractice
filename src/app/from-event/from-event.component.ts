import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  constructor(private _print: PrintService) {

  }
@ViewChild('btnadd')btnadd!:ElementRef;

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    let count=0;
    fromEvent(this.btnadd.nativeElement,"click").subscribe(res=>{
      // console.log("video "+count++)
      let val="video "+count++
      this._print.print(val,'elContainer')
      this._print.print(val,'elContainer2')
    })
  }

}
