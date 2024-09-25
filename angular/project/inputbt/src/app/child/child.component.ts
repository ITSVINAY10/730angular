import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() parentName: string = ''; // Input from parent
  childName: string = ''; // Child's input value

  constructor(private communicationService:) {} // Correct capitalization of service name

  ngOnInit(): void { // No need to return a type
    // Subscribe to updates from the parent
    this.communicationService.currentName.subscribe((childName: string) => {
      this.parentName = childName; // Updates parentName with the child's name
    });
  }

  // Method to send childName to the parent using the service
  sendToParent() {
    this.communicationService.updateName(this.childName);
  }
}
