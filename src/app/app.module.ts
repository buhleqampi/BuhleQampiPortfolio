import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { ProjectsComponent } from './Projects/projects/projects.component';
import { EducationComponent } from './Education/education/education.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HeaderComponent } from './Header/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProjectsComponent,
    EducationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
