import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
