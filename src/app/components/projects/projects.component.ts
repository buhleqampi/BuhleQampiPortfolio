import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  showDots: boolean = true;

  toggleText(): void {
    this.showDots = !this.showDots;
  }
}
