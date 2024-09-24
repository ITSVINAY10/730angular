import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ Input () name:string = ''; 

  name1:string = ''; 
  displayName: string = '';  

  updateName() {
    this.displayName = this.name; 
    this.displayName = this.name1; 
  }

}
