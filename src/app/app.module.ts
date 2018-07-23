import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { JumbotronComponent } from './component/jumbotron/jumbotron.component';
import { AboutComponent } from './component/pages/about/about.component';
import { HomeComponent } from './component/pages/home/home.component';
const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
