import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { CarouselModule } from 'primeng/carousel';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { facultyData } from '../data-entries/json/faculty';


import { AboutUsComponent } from './views/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
console.log(facultyData)
