import { Component } from '@angular/core';

interface Project {
  name: string;
  image: string;
  description: string;
  GitHub: string;
  Live: string;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: "WordPress E-commerce",
      image: "https://i.postimg.cc/3JdfYTjr/Screenshot-2023-05-16-115704.png",
      description: "Got to work in a team of 4 colleagues and create an e-commerce website using WordPress.",
      GitHub: "",
      Live: "https://dev-alphapeakexplore.pantheonsite.io/"
    },
    {
      name: "Capstone Project",
      image: "https://i.postimg.cc/z3mMb25P/Screenshot-2023-05-16-113928.png",
      description: "A capstone project that tests my full stack development of skills I have learnt",
      GitHub: "https://github.com/buhleqampi/second_handy.git",
      Live: "https://capstoneproject-7d162.web.app/"
    },
    {
      name: "Node Full Stack Project",
      image: "https://i.postimg.cc/cL4nVQVV/Screenshot-2023-05-16-114358.png",
      description: "I worked in a pair did a full stack project using Node.js",
      GitHub: "https://github.com/zoefaithdaniels/Node-FullstackProject.git",
      Live: "http://vue-eomp.firebaseapp.com/"
    },
    {
      name: "JS Calculator",
      image: "https://i.postimg.cc/Hspt1pkK/Screenshot-2023-05-16-114142.png",
      description: "E-commerce I used HTML/CSS and JavaScript.",
      GitHub: "https://github.com/buhleqampi/Javascript-calculator.git",
      Live: "https://buhleqampi-js-calculator.netlify.app"
    },
    {
      name: "Point of Sale",
      image: "https://i.postimg.cc/HxtNbscJ/Point-of-sale.png",
      description: "An end of module project using JavaScript",
      GitHub: "https://github.com/buhleqampi/Javascript-project-2.git",
      Live: "https://js-endof-module-project-2.netlify.app"
    },
    {
      name: "HTML/CSS Portfolio",
      image: "https://i.postimg.cc/PxFc5fC1/Portfolio.png",
      description: "This was my first project in the form of a personal portfolio. I used HTML and CSS.",
      GitHub: "https://github.com/buhleqampi/Portfolio.git",
      Live: "https://buhle-qampi-portfolio.netlify.app"
    }
  ];
}
