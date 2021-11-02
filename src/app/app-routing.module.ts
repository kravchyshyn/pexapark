import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'landing-page', component: LandingPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
