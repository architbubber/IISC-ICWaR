import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ResearchComponent } from './views/research/research.component';
import { CentresAndFacilitiesComponent} from './views/centres-and-facilities/centres-and-facilities.component';
import { SeminarsAndPublicationsComponent } from './views/seminars-and-publications/seminars-and-publications.component';
import { WorkshopsAndMeetingsComponent } from './views/workshops-and-meetings/workshops-and-meetings.component';
import { MonsoonSchoolComponent } from './views/monsoon-school/monsoon-school.component';
import { GalleryComponent } from './views/gallery/gallery.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'people',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'events',children:[
    {path:'seminars-and-publications',component: SeminarsAndPublicationsComponent},
    {path:'workshop-and-meetings',component: WorkshopsAndMeetingsComponent},
    {path:'monsoon-school',component: MonsoonSchoolComponent},
    ]
  },
  {path: 'centres-and-facilities', component: CentresAndFacilitiesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
