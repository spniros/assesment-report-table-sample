import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentGridComponent } from './student-grid/student-grid.component';


const routes: Routes = [
  {
    path: '',
    component: StudentGridComponent,
    // canActivate: [AuthGuard],
    data: ['customer']
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
