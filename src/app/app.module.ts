import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CloudTitleComponent } from './component/cloud-title/cloud-title.component';
import { RecentTacosComponent } from './component/recents/recents.component';
import { RouterModule, Routes } from '@angular/router';
import { WrapsPipe } from './component/recents/WrapsPipe';
import { NonWrapsPipe } from './component/recents/NonWrapsPipe';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  /*{
    path: 'login',
    component: LoginComponent
  },**/
  {
    path: 'recents',
    component: RecentTacosComponent
  },
  /*{
    path: 'specials',
    component: SpecialsComponent
  },
  {
    path: 'locations',
    //component: LocationsComponent
  },
  {
    path: 'design',
    //component: DesignComponent
  },
  {
    path: 'cart',
    //component: CartComponent
  },*/
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CloudTitleComponent,
    RecentTacosComponent,
    NonWrapsPipe,
    WrapsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
