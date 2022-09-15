import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-partys',
  templateUrl: './partys.component.html',
  styleUrls: ['./partys.component.scss'],
})
export class PartysComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  option = {
    slidesPerView: 1.1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 10,
    autoplay:false,
  }

  trendingSlider = {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: false,
    spaceBetween: 10,
    autoplay:false, 
  }

  onContentScroll(event) {
    // console.log(event);
    // if (event.detail.scrollTop >= 50) {
    //   this.renderer.setStyle(this.header['el'], 'top', '-76px');
    // } else {
    //   this.renderer.setStyle(this.header['el'], 'top', '20px');
    // }
  }

}
