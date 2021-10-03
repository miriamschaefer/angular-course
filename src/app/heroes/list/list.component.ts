import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Dr. Strange'];
  deletedHeroe: string = '';


  deleteHeroe() {
    this.deletedHeroe = this.heroes.pop() || '';

  }



}
