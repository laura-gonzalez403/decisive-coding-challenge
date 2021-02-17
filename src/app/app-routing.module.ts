import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: AppComponent },
  { path: 'people/:id/edit', component: PersonComponent },
  { path: 'people/:id', component: CreatePersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
