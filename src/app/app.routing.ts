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
