import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { FeedPage } from './feed.page';

import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedsPageModule } from 'src/app/journeys/feeds/feeds.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeedsPageModule,
    FeedPageRoutingModule
  ],
  declarations: []
})
export class FeedPageModule {}
