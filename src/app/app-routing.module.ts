import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './Contact/contact/contact.component';
import { ProjectsComponent } from './Projects/projects/projects.component';
import { EducationComponent } from './Education/education/education.component';


const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  