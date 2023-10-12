import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/BL/data.service';
import { Question } from 'src/app/BL/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  public question: Question;
  
  constructor(public data: DataService, 
              private navCtrl: NavController, 
              private route: ActivatedRoute) {
    let questionId = this.route.snapshot.paramMap.get("id");
    if (!questionId) questionId = "new";
    if (questionId == "new")
      this.question = this.data.newQuestion();
    else
      this.question = this.data.getQuestion(questionId);
  }

  ngOnInit() {
  }

  // wird aufgerufen wenn ich versuche die Seite zu verlassen
  ionViewWillLeave() {
    if (this.question.id == "") {
      if (this.question.title.length >= 1) {
        this.data.addQuestion(this.question)
      }
    }
    else {
      this.data.save();
    }
  }
}
