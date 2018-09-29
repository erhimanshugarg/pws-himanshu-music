import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';

/**
 * Home Page Routes
 */
const routes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  }
];

/**
 * HomePage Module
 */
@NgModule( {
  declarations: [
    HomePageComponent,
  ],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class HomePageModule {

}
