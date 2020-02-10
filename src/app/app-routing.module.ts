import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopComponent} from './content/top/top.component';
import {DashboardComponent} from './content/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
