import { Component, ViewChild } from '@angular/core';
import { Product } from './shared/product.model';
import { DataService } from './data.service';
import { CartService } from './cart.service';

import { FiltersComponent } from './filters/filters.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clientHeight: number;

  constructor() {
    this.clientHeight = (window.innerHeight - 33);
  }
}
