import { Routes } from '@angular/router';

export const routes: Routes = [

{
  path: 'dashboard',
  loadComponent: () =>
  import('./gifs/pages/dashboard-page/dashboard-page.component'),

  children: [
      {
  path: 'trending',
  loadComponent: () =>
  import('./gifs/pages/dashboard-page/dashboard-page.component'),
},



{
  path: 'search',
  loadComponent: () =>
  import('./gifs/pages/dashboard-page/dashboard-page.component'),
},
{
  path: '**',
  redirectTo: 'trending'
}
  ],
},


{
  path: '**',
  redirectTo: 'dashboard',
},

];
