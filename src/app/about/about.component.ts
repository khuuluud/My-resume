import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  
  ngOnInit(): void {
   
  }
  
  ngAfterViewInit() {
    this.init();
   
    
  }

  init() {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        scrub: 0.5,
        pin: true,
        start: "top top",
        end: "+=150%"
      }
    })
    .to(".box", {
      force3D: true,
      duration: 1,
      xPercent: 100,
      ease: "power1.inOut",
      stagger: { amount: 1 }
    })
    .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
    .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);
    
  } 
 
}






