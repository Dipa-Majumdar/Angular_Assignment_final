
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/employee.component';
import {Employee_list_Component} from './employee_list_folder/employee_list_folder.component';

import { SharedServiceComponent } from './shared.services';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
   { path: 'employee_list_folder', component: Employee_list_Component },
  { path: 'home/:some', component: HomeComponent },
{path: 'home', component: HomeComponent},
{path:'',redirectTo:'/employee_list_folder',pathMatch: 'full'},
 
  
  { path: 'about', component: AboutComponent },
  {
    path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      {
        path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

