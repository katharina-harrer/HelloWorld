import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/BL/data.service';
import { Question } from 'src/app/BL/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {

  constructor(public data: DataService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  public show(id: string) {
    this.navCtrl.navigateForward("question/"+id)
  }

  public delQuestion(q: Question) {
    this.data.deleteQuestion(q);
  }
}
