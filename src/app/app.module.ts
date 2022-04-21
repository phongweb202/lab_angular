import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/admin/layout/layout.component';
import { AsideComponent } from './layouts/admin/aside/aside.component';
import { HeaderComponent } from './layouts/admin/header/header.component';
import { FooterAdminComponent } from './layouts/admin/footer-admin/footer-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { DemoComponent } from './views/client/demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { InfomationComponent } from './views/admin/infomation/infomation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillComponent } from './views/admin/skill/skill.component';
import { ShowScoreComponent } from './components/show-score/show-score.component';
import { ProjectComponent } from './views/admin/project/project.component';
import { SchoolComponent } from './views/admin/school/school.component';
import { FormsModule } from '@angular/forms';
import { TemplateSchoolComponent } from './components/views/template-school/template-school.component';
import { TemplateProjectComponent } from './components/views/template-project/template-project.component';
import { TempateSkillComponent } from './components/views/tempate-skill/tempate-skill.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    FooterAdminComponent,
    DashboardComponent,
    DemoComponent,
    InfomationComponent,
    SkillComponent,
    ShowScoreComponent,
    ProjectComponent,
    SchoolComponent,
    TemplateSchoolComponent,
    TemplateProjectComponent,
    TempateSkillComponent,
    ShowValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
