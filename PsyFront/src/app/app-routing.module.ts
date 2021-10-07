import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccountInfosComponent } from './account-infos/account-infos.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginPsyComponent } from './login-psy/login-psy.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalInfosComponent } from './personal-infos/personal-infos.component';
import { ProfessionnalInfosComponent } from './professionnal-infos/professionnal-infos.component';
import { ProfessionnalSignupComponent } from './professionnal-signup/professionnal-signup.component';
import { SearchComponent } from './search/search.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { SummaryComponent } from './summary/summary.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: true } },
  { path: 'signup', component: SignupComponent, children: [
    { path: 'account', component: AccountInfosComponent },
    { path: 'personal', component: PersonalInfosComponent },
    { path: 'summary', component: SummaryComponent }
  ] },
  {
    path: 'signup/professionnal', component: ProfessionnalSignupComponent, children: [
      { path: 'account', component: AccountInfosComponent },
      { path: 'personal', component: PersonalInfosComponent },
      { path: 'professionnal', component: ProfessionnalInfosComponent },
      { path: 'summary', component: SummaryComponent }
    ]
  },
  { path: 'login', component: LoginComponent, data: { animation: true } },
  { path: 'login/psy', component: LoginPsyComponent, data: { animation: true } },
  { path: 'infos', component: InfosComponent, data: { animation: true }},
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'accessDenied', component: AccessDeniedComponent },
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuardService] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
