import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  name: string = ''; 
  name1:string = '';

  displayName: string = '';  

  updateName() {
    this.displayName = this.name; 
    this.displayName = this.name1; 
  }

}
