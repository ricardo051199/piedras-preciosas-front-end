import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GemstoneListComponent } from "./components/gemstone-list/gemstone-list.component";
import {GemstoneFormComponent} from "./components/gemstone-form/gemstone-form.component";

const routes: Routes = [
  { path: '', component: GemstoneListComponent },
  { path: 'gemstone', component: GemstoneListComponent },
  { path: 'gemstone/create', component: GemstoneFormComponent },
  { path: 'gemstone/edit/:id', component: GemstoneFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
