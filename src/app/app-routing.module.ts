import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorOneComponent } from './monitor-one/monitor-one.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/monitor',
  pathMatch: 'full'
},
  { path: 'monitor', component: MonitorOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
