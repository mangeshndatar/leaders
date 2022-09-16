import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartysRoutingModule } from './partys-routing.module';

import { PartysComponent } from './partys.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartysRoutingModule
  ],
  declarations: [PartysComponent]
})
export class FeedsPageModule {}
