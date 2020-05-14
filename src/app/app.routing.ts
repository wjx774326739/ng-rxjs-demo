import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: 'of',
    loadChildren: () => import('./modules/of/of.module').then(m => m.OfModule)
  },
  {
    path: 'from',
    loadChildren: () => import('./modules/from/from.module').then(m => m.FromModule)
  },
  {
    path: 'fromEvent',
    loadChildren: () => import('./modules/fromEvent/fromEvent.module').then(m => m.FromEventModule)
  },
  {
    path: '',
    redirectTo: 'of',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
