import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortraitComponent } from './portrait/portrait.component';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '4Ma9AZferq5', component: TimerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

