import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentQuiz: Quiz = {
    id: '',
    quizName: 'Neu',
    questions: []
  };

  constructor() {
    this.currentQuiz.questions.push({
      id: '1',
      title: 'Wieviel ist 2 + 2?',
      a1: '1',
      a2: '4',
      a3: '7',
      a4: '12',
      correct: 2
    })
    this.currentQuiz.questions.push({
      id: '2',
      title: 'Wieviel ist 2 + 3?',
      a1: '2',
      a2: '3',
      a3: '5',
      a4: '9',
      correct: 3
    })
  }
}
