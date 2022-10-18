import { SettingsComponent } from './pages/settings/settings.component';
import { BillingComponent } from './modules/settings/billing/billing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const canvasRoutes: Routes = [
  {path: 'case-viewer', redirectTo: 'dashboard', pathMatch: 'full'},
]
const settingsRoutes: Routes = [
  {path: '', component: SettingsComponent},
  {path: 'billings', component: BillingComponent},
]

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cases', children: canvasRoutes, loadChildren: () => import('./modules/canvas/canvas.module').then(m => m.CanvasModule)},
  {path: 'settings', children: settingsRoutes, loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)},
  {path: '**', redirectTo: 'dashboard'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
