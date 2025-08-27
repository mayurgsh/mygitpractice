import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription, observable } from 'rxjs';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-customeobservable',
  templateUrl: './customeobservable.component.html',
  styleUrls: ['./customeobservable.component.scss'],
  // encapsulation:ViewEncapsulation.None
})
export class CustomeobservableComponent implements OnInit,OnDestroy {

  constructor(private _print:PrintService) { }
techStatus:any;
sub2!:Subscription;
 courses=['angular','html','css','javascript','typescript']
  ngOnInit(): void {

    //example 1 manual observable
    const custobs1 = Observable.create((res: any) => {
     
      setTimeout(() => {
        res.next('Html')
      }, 1000);
      setTimeout(() => {
        res.next('Css')
      }, 2000);
      setTimeout(() => {
        res.next('Javascript')
    
        
      }, 3000);
      setTimeout(() => {
        res.next('Angular')
        // res.error(new Error("limit exceed..."))
      
      }, 4000);
      setTimeout(() => {
        res.next('Typescript')
        res.complete()
       
      }, 5000);
    })
    custobs1.subscribe((re:any)=>{
      console.log(re)
      this._print.print(re,'elContainer')
    },
    (error:any)=>{
      // this.techStatus='error'
    },
    ()=>{
      this.techStatus="completed"
    }
    )
    
    
  
  

  let obs2=Observable.create((res:any)=>{
let count=0;
    setInterval(()=>{
      // res.next(this.courses[count])
      // this._print.print(this.courses[count],'elcontainer2')
      // if(count>4)
      // res.complete()
      // count++;
    },1000)
    
  })
  this.sub2=obs2.subscribe((ress:any)=>{
    console.log(ress)
  })
  }
  ngOnDestroy(): void {
    this.sub2.unsubscribe()
  }
}

