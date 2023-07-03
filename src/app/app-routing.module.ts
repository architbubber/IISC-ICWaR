import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FacultyComponent } from './views/faculty/faculty.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'faculty', component: FacultyComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
