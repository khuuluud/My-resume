import * as aos from 'aos';
import { Router } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})


export class ResumeComponent  {


  constructor(private Router:Router){}
 
  ngOnInit():void{
    aos.init()
  }
 
 



 
}



