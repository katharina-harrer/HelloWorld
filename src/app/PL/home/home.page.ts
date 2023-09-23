import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/BL/data.service';

// Controller
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public data: DataService, private navCtrl: NavController) {
  }

  public showList() {
    this.navCtrl.navigateForward("question-list");
  }
}
