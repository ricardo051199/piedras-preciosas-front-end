import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GemstoneFormComponent } from './components/gemstone-form/gemstone-form.component';
import { GemstoneListComponent } from './components/gemstone-list/gemstone-list.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GemstoneFormComponent,
    GemstoneListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
