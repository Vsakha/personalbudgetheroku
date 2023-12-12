import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthguardGuard } from './authguard.guard';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { SignupComponent } from './signup/signup.component';
import { DummyComponent } from './dummy/dummy.component';
import { AddbudgetComponent } from './addbudget/addbudget.component';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent,
    pathMatch : 'full'   
  },
  {
    path : 'about',
    component: AboutComponent   
  },
  {
    path : 'login',
    component: LoginComponent,    
  },
  {
    path : 'homepage',
    component: HomepageComponent,
    pathMatch: 'full'    
  },
  {
    path: 'contact',
    component : ContactComponent,
    pathMatch : 'full'
  },
  {
    path: 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path:'logout',
    component: LoginComponent
  },
  {
    path:'dummy',
    component: DummyComponent
  },
  {
    path: "addbudget",
    component: AddbudgetComponent
  },
  {
    path:'**',
    component: P404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
