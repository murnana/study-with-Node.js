import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// ルータがHeroesComponentを参照できるようにする
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

/**
 * ルーティング専用モジュール
 */
@NgModule({
  exports: [ RouterModule ],                  // AppComponentで利用
  imports: [ RouterModule.forRoot(routes) ]   // ルーターの初期化
})
export class AppRoutingModule { }

