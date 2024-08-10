import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { ProjectsComponent } from './components/projects/projects.component';



const routes: Routes = [
  {path: '', redirectTo:'' , pathMatch: 'full'},
  {path : '', component: AppComponent},
  {path : 'home', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'resume', component: ResumeComponent},
  {path : 'services', component: ServicesComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'navbar', component: NavbarComponent}, 
   {path : 'tech', component: TechstackComponent},
   {path : 'projects', component: ProjectsComponent},
   {path : 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  