import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavouritePage } from './favourite.page';

import { FavouritePageRoutingModule } from './favourite-routing.module';
import { FavouritesPageModule } from 'src/app/journeys/favourites/favourites.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FavouritesPageModule,
    FavouritePageRoutingModule
  ],
  declarations: [FavouritePage]
})
export class FavouritePageModule {}
