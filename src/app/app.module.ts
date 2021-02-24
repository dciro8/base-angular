import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,// AboutComponent,// ContactComponent, // HomeComponent,
    MenuComponent,PagesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, PagesModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
