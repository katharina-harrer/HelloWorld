import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./PL/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'question',
    loadChildren: () => import('./PL/question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'question-list',
    loadChildren: () => import('./PL/question-list/question-list.module').then( m => m.QuestionListPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./PL/quiz/quiz.module').then( m => m.QuizPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
