import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './contactus/contactus.component';
import { GChartComponent } from './gCharts/gCharts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUSComponent },
  { path: 'gCharts', component: GChartComponent },
  { path: '**', redirectTo: 'login' }	// otherwise redirect to home
];

export const routing = RouterModule.forRoot(routes);
