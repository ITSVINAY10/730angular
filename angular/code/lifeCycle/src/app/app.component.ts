import { Component,OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges,DoCheck
{
  title = 'lifeCycle';
  count=0;
  constructor(){
    console.log("constructor started")
  }
  incr()
  {
    this.count++;
  }
  decr()
  {
    this.count--;
  }
  ngOnChanges()
  {
    console.log(" on changes triggered")
  }
  ngOnInit(){
    console.log("Init started")
  }
  ngDoCheck(){
    console.log("do check clled") /* it will run when changes happen in component */
  }
  ngAfterContentInit()
  {
    console.log("AfterContentInit is called")
  }
  ngAfterContentChecked()
  {
    console.log("AfterContentChecked is called")
  }
  ngAfterViewInit()
  {
    console.log(" AfterViewInit is called")
  }
  ngAfterViewChecked()
  {
    console.log("AfterViewChecked is called")
  }
  ngOnDestroy()
  {
    console.log("Destroy called")
  }




  
}
