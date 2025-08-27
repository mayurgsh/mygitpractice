import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-timerinterval',
  templateUrl: './timerinterval.component.html',
  styleUrls: ['./timerinterval.component.scss']
})
export class TimerintervalComponent implements OnInit {

  constructor(private _print:PrintService) { }
subscription!:Subscription;
  ngOnInit(): void {
  // const sub= interval(1000);
  const sub=timer(5000,1000)
   this.subscription= sub.subscribe(res=>{   
    let val="video "+res;
    this._print.print(val,"elContainer")

    if(res>=5){

      this.subscription.unsubscribe()
    }
   })
  }

}
