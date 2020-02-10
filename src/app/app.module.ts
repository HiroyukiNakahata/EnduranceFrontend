import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopComponent} from './content/top/top.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './content/dashboard/dashboard.component';
import {ProjectComponent} from './content/childcontent/project/project.component';
import {SummaryComponent} from './content/childcontent/summary/summary.component';
import {TodoComponent} from './content/childcontent/todo/todo.component';
import {NavigationComponent} from './content/childcontent/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    DashboardComponent,
    ProjectComponent,
    SummaryComponent,
    TodoComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
