import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import  { AppConfig } from './app.config';
import { MygaModule } from 'myga';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// APP_INITIALIZER: before app initialise, load external configuration
export function BeforeInitApp(appInitService: AppConfig) {
  return (): Promise<any> => { 
    return appInitService.load();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    ContactUsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, MygaModule, AppRoutingModule
  ],
  providers: [AppConfig,
    { provide: APP_INITIALIZER, useFactory: BeforeInitApp, deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
