import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopComponent} from './content/top/top.component';
import {DashboardComponent} from './content/dashboard/dashboard.component';
import {EditorComponent} from './content/editor/editor.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'editor', component: EditorComponent},
  {path: '', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
