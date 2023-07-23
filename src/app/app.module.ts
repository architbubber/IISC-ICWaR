import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { CarouselModule } from 'primeng/carousel';

// import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AboutUsComponent } from './views/about-us/about-us.component';
import { ResearchComponent } from './views/research/research.component';
import { CentresAndFacilitiesComponent } from './views/centres-and-facilities/centres-and-facilities.component';
import { SeminarsAndPublicationsComponent } from './views/seminars-and-publications/seminars-and-publications.component';
import { WorkshopsAndMeetingsComponent } from './views/workshops-and-meetings/workshops-and-meetings.component';
import { MonsoonSchoolComponent } from './views/monsoon-school/monsoon-school.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    ResearchComponent,
    CentresAndFacilitiesComponent,
    SeminarsAndPublicationsComponent,
    WorkshopsAndMeetingsComponent,
    MonsoonSchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
