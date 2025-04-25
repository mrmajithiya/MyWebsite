import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import path from 'path/posix';

const routes: Routes = [
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'registrationpage', component: RegistrationpageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'contactpage', component: ContactpageComponent },
  { path: 'aboutuspage', component: AboutuspageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
