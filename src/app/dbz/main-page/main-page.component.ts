import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {


  new: Character = {
    name: 'Roshi',
    power: 5000,
  }

  constructor() {}

}
