import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './contactus/contactus.component';
import { DataService } from './data.service';
import { CartService } from './cart.service';

//components declaration
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CartComponent } from './cart/cart.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { GChartComponent } from './gCharts/gCharts.component';

// Directives declaration
import { GoogleChart } from './gCharts/gCharts.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductThumbnailComponent,
    CartComponent,
    SortFiltersComponent,
    ShowcaseComponent,
    FiltersComponent,
    SearchBarComponent,
    ContactUSComponent,
    GoogleChart,
    GChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
