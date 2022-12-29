import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalllogfileComponent } from './calllogfile/calllogfile.component';
import { navbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: navbarComponent },
  { path: 'logs', component: CalllogfileComponent },
  { path: '', component: MainComponent },
  /// {path:' ', redirectTo:'main-header',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
