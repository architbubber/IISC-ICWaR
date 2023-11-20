import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ResearchNewComponent } from './views/research-new/research-new.component';
import { CentresAndFacilitiesComponent} from './views/centres-and-facilities/centres-and-facilities.component';
import { SeminarsAndPublicationsComponent } from './views/seminars-and-publications/seminars-and-publications.component';
import { WorkshopsAndMeetingsComponent } from './views/workshops-and-meetings/workshops-and-meetings.component';
// import { MonsoonSchoolComponent } from './views/monsoon-school/monsoon-school.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { ActivitiesAndEventsComponent } from './views/activities-and-events/activities-and-events.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ProgramsComponent } from './views/programs/programs.component';
import { PeopleComponent } from './views/people/people.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},

  {path: 'people/faculty',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/visitors',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/researchStudents',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/postDoctoralScholars',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/projectStaff',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/officeStaff',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'research', component: ResearchNewComponent},
  {path:'publications',component: PublicationsComponent},
  {path: 'events',children:[
    {path:'seminars-and-publications',component: SeminarsAndPublicationsComponent},
    {path:'workshop-and-meetings',component: WorkshopsAndMeetingsComponent},
    {path:'monsoon-school',component: ActivitiesAndEventsComponent},
    ]
  },
  {path: 'centres-and-facilities', component: CentresAndFacilitiesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'program', component:ProgramsComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
