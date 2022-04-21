import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


























import { LayoutComponent } from './layouts/admin/layout/layout.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { InfomationComponent } from './views/admin/infomation/infomation.component';
import { ProjectComponent } from './views/admin/project/project.component';
import { SchoolComponent } from './views/admin/school/school.component';
import { SkillComponent } from './views/admin/skill/skill.component';
import { DemoComponent } from './views/client/demo/demo.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'infomation',
        component: InfomationComponent
      },
      {
        path: 'skill',
        component: SkillComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'school',
        component: SchoolComponent
      },
    ]
  },
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
