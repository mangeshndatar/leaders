import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {

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
  onSlideWillChange(){
    console.log("slide will change")
  }

  onSlideDidChange() {
    console.log("slide did change")
  }
}
