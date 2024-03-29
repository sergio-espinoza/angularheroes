import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-changes',
  template: `
    <br/>
    <h3>OnChanges</h3>

    <mat-form-field>
      <input
        matInput
        placeholder="Hero Name"
        #heroName
        (input)="heroName" />
    </mat-form-field>
    <mat-form-field>
      <input
        matInput
        placeholder="Power"
        #power
        (input)="power" />
    </mat-form-field>
    <br/>
    <app-changes
      [hero]="heroName.value"
      [power]="power.value">
    </app-changes>
  `
})
export class ParentChangesComponent {

  constructor() { }


}
