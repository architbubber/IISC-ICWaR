import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ResearchComponent } from './views/research/research.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CentresAndFacilitiesComponent} from './views/centres-and-facilities/centres-and-facilities.component';
import { SeminarsAndPublicationsComponent } from './views/seminars-and-publications/seminars-and-publications.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'people',loadChildren:()=>import('./views/people/people.module').then(m=>m.PeopleModule)},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'seminars-and-publications', component: SeminarsAndPublicationsComponent},
  {path: 'centres-and-facilities', component: CentresAndFacilitiesComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppRoutingModule { }
