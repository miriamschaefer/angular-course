import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  accumulate(value: number) {
    this.number += value;
  }
}
