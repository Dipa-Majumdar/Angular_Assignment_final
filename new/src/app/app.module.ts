import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/employee.component';
import {Employee_list_Component} from './employee_list_folder/employee_list_folder.component';
import { SharedServiceComponent } from './shared.services';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
   Employee_list_Component,
     RepoDetailComponent,
    HomeComponent,
     ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      rootRouterConfig
    )
  ],
  providers: [
    GithubService,SharedServiceComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
