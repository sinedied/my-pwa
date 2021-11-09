import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  Message: {{ hello }}
  `,
  styles: []
})
export class AppComponent {
  hello = '';

  async ngOnInit() {
    try {
      const response = await fetch('api/hello');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      this.hello = await response.text();
    } catch (err: any) {
      this.hello = 'Error: ' + err.message;
    }
  }
  
}
