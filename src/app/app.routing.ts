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
    path: 'switchMap',
    loadChildren: () => import('./modules/switchMap/switchMap.module').then(m => m.SwitchMapModule)
  },
  {
    path: 'auditTime',
    loadChildren: () => import('./modules/auditTime/auditTime.module').then(m => m.AuditTimeModule)
  },
  {
    path: 'debounceTime',
    loadChildren: () => import('./modules/debounceTime/debounceTime.module').then(m => m.DebounceTimeModule)
  },
  {
    path: 'takeUntil',
    loadChildren: () => import('./modules/takeUntil/takeUntil.module').then(m => m.TakeUntilModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'observable',
    loadChildren: () => import('./modules/observable/observable.module').then(m => m.ObservableModule)
  },
  {
    path: 'distinctUntilChanged',
    loadChildren: () => import('./modules/distinctUntilChanged/distinctUntilChanged.module').then(m => m.DistinctUntilChangedModule)
  },
  {
    path: 'merge',
    loadChildren: () => import('./modules/merge/merge.module').then(m => m.MergeModule)
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
