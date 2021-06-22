import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `
  <h1>New version!</h1> 
  
  Message: {{ hello }}

  <p *ngIf="updateAvailable$ | async; else noUpdate">
  An update is available!
  Click here to apply:
  <button (click)="update()">Update</button>
</p>
<ng-template #noUpdate>
  <p>No update available.</p>
</ng-template>
  `,
  styles: []
})
export class AppComponent {
  hello = '';
  updateAvailable$ = this.swUpdate.available;

  constructor(private swUpdate: SwUpdate) {}

  async update() {
     await this.swUpdate.activateUpdate();
     document.location.reload();
  }

  async ngOnInit() {
    try {
      const response = await fetch('api/hello');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      this.hello = await response.text();
    } catch (err) {
      this.hello = 'Error: ' + err.message;
    }
  }
}
