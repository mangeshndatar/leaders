import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {
  @ViewChild("header") header: HTMLElement;
  constructor( public element: ElementRef, 
    public renderer: Renderer2) { }

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
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
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
