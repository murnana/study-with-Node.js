import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/**
 * Heroコンポーネント
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];

  // selectedHero: Hero;

  /**
   * プロパティの初期化のみを行ってください
   * Http通信などを呼ばないでください
   * @param heroService
   */
  constructor(private heroService: HeroService) {}

  /**
   * コンポーネント作成直後に呼ばれます
   */
  ngOnInit() {
    this.getHeroes();
  }

  // /**
  //  * 選択されたら呼ばれます
  //  * @param hero 選択されたHero
  //  */
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  /**
   * サービスからヒーローデータを取得する
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
