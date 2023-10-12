import { Injectable } from '@angular/core';
import { Question } from './Question';
import { Quiz } from './Quiz';
import { v4 as uuidv4 } from 'uuid';
import { Preferences }  from '@capacitor/preferences';
import { CapacitorHttp, HttpResponse  }  from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentQuiz: Quiz = {
    id: '',
    quizName: 'First Quiz',
    questions: []
  };

  constructor() {

    this.load();

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

  public newQuestion(): Question {
    return {
      id: '',
      title: '',
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      correct: 1
    }
  }

  public getQuestion(id: string): Question {
    let q = this.currentQuiz.questions.find(question => question.id == id)
    if (!q) q = this.newQuestion();
    return q; 
  }

  public addQuestion(q: Question) {
    q.id = uuidv4();
    this.currentQuiz.questions.push(q);
    this.save();
  }

  public deleteQuestion(q: Question) {
    let index = this.currentQuiz.questions.indexOf(q);
    if (index > -1) this.currentQuiz.questions.splice(index, 1);
    this.save();
  }

  public save() {
    let strQuiz = JSON.stringify(this.currentQuiz);
    Preferences.set({
      key: "MasterQuiz",
      value: strQuiz
    })
  }

  // public oldLoad() {
  //   let quizPromise = Preferences.get({ key: "MasterQuiz" }); // Promise<GetResult> = Pref...
  //   quizPromise.then((res) => {
  //     console.log("2");
  //     let strQuiz = res.value || "";
  //     let obj: Quiz = <Quiz> JSON.parse(strQuiz);
  //     this.currentQuiz = obj;
  //   }).catch(() => { console.log("MasterQuiz nicht gefunden") });
  //   console.log("1");
  // }

  public async load() {
    try {
      let res = await Preferences.get({ key: "MasterQuiz" });

      console.log("2");
      let strQuiz = res.value || "";
      let obj: Quiz = <Quiz> JSON.parse(strQuiz);
      this.currentQuiz = obj;
      
      console.log("1");
      console.log(this.currentQuiz);
    }
    catch {
      this.currentQuiz;
      console.log("MasterQuiz nicht gefunden")
    }
  }

  public async loadByHTTP() {
    const options = {
      url: '/assets/einQuiz.json',
      headers: { },
      params: { },
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    console.log(response.data);
    this.currentQuiz = response.data;
  }
}