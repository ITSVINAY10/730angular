import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxJSDemo';
  obs = new Observable((sub)=>{
    sub.next(1);
    sub.next(10);
    sub.next(100);
    sub.next(1000);
    sub.complete()
  })
}
