import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Application Routes
 */
const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home-page/home-page.module#HomePageModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

/**
 * Application Routing Module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
