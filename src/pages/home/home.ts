import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  title = 'Tour of Heroes';

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  myHero = this.heroes[0];

}
