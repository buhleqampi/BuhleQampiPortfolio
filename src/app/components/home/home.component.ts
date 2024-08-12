import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titles: string[] = ['Junior Software Engineer', 'Full Stack Web Developer'];
  currentTitleIndex: number = 0;
  currentTitle: string = this.titles[this.currentTitleIndex];

  constructor() {}

  ngOnInit(): void {
    this.startTitleRotation();
  }

  startTitleRotation(): void {
    setInterval(() => {
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      this.currentTitle = this.titles[this.currentTitleIndex];
    }, 3000); 
  }
}

