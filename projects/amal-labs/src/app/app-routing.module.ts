import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cases', loadChildren: () => import('./modules/canvas/canvas.module').then(m => m.CanvasModule)},
  {path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)},
  {path: '**', redirectTo: 'dashboard'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
