import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftBarComponent } from './left-bar/left-bar.component';

const routes: Routes = [
  { path: 'schedule', component: LeftBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
