import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentName: string = '';
  childName: string = '';

  // Method to update child's name
  updateFromChild(newName: string) {
    this.childName = newName;
  }

}
