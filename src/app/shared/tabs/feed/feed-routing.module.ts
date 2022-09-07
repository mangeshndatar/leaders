import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../journeys/feeds/feeds.module').then(m => m.FeedsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedPageRoutingModule {}
