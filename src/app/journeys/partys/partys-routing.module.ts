import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartysComponent } from './partys.component';

const routes: Routes = [
  {
    path: '',
    component: PartysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartysRoutingModule {}
