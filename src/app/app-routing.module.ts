import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingPage } from './journeys/onboarding/onboarding.page';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {
    path: 'onboarding',
    component : OnboardingPage
    // pathMatch: 'full'
  },
  {
    path : 'login',
    loadChildren: () => import('../app/journeys/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./shared/tabs/tabs.module').then(m => m.TabsPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./journeys/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./journeys/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./journeys/feeds/feeds.module').then( m => m.FeedsPageModule)
  },
  {
    path : 'splash',
    component : SplashComponent
  },
  {
    path :'',
    redirectTo : 'splash',
    pathMatch : 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
