import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FulllayoutComponent } from './layout/fulllayout/fulllayout.component';
import { PagelayoutComponent } from './layout/pagelayout/pagelayout.component';



export const routes: Routes = [
  // { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  {
    path: '',
    component: FulllayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'student',
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
      },
    ]
  },
  {
    path: 'pages',
    component: PagelayoutComponent,
    data: {
      title: 'page'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
      },
    ]

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
