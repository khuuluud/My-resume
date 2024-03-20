import { Router } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})


export class ResumeComponent  {


  constructor(private Router:Router){}
 
  sourceOne() {
    const url = 'https://github.com/khuuluud/Weather-Site'; 
    window.open(url, '_blank');
  }
  liveOne() {
    const url = 'https://weather-site-git-main-kholouds-projects.vercel.app/'; 
    window.open(url, '_blank');
  }
 
  sourceTwo() {
    const url = 'https://github.com/khuuluud/Recipes-Frontend'; 
    window.open(url, '_blank');
  }
  liveTwo() {
    const url = 'https://recipes-frontend-kholouds-projects.vercel.app/'; 
    window.open(url, '_blank');
  }
 
  sourceThree() {
    const url = 'https://github.com/khuuluud/DailyDose'; 
    window.open(url, '_blank');
  }
  liveThree() {
    const url = 'https://daily-dose-kholouds-projects.vercel.app/'; 
    window.open(url, '_blank');
  }
 
  sourceFour() {
    const url = 'https://github.com/khuuluud/Egyptian-Party'; 
    window.open(url, '_blank');
  }
  liveFour() {
    const url = 'https://egyptian-party-kholouds-projects.vercel.app'; 
    window.open(url, '_blank');
  }
 
  sourceFive() {
    const url = 'https://github.com/khuuluud/Recipes-Frontend'; 
    window.open(url, '_blank');
  }
  liveFive() {
    const url = 'https://recipes-frontend-kholouds-projects.vercel.app/'; 
    window.open(url, '_blank');
  }



 
}



