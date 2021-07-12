import { JwtInterceptor } from './services/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { ListAddressesComponent } from './components/list-addresses/list-addresses.component';
import { EditAddressesComponent } from './components/edit-addresses/edit-addresses.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { ShowAddressesComponent } from './components/show-addresses/show-addresses.component';
import { AddressComponent } from './components/address/address.component';
import { ModalComponent } from './components/addresses/modal/modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlanComponent } from './components/plan/plan.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfilComponent } from './components/profil/profil.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { QuestionComponent } from './components/question/question.component';
import { SourceComponent } from './components/source/source.component';
import { DocumentComponent } from './components/document/document.component';
import { ListCondidatComponent } from './components/admin/list-condidat/list-condidat.component';
import { DashComponent } from './components/dash/dash.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OffreComponent } from './components/offre/offre.component';
import { SearchComponent } from './components/search/search.component';
import { ListoffComponent } from './components/offre/listoff/listoff.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { ShowoffreComponent } from './components/offre/showoffre/showoffre.component';
import { EditoffreComponent } from './components/offre/editoffre/editoffre.component';
import { EditspeComponent } from './components/specialite/editspe/editspe.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { CondidatureComponent } from './components/condidature/condidature.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { ShowuserComponent } from './components/admin/showuser/showuser.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { PostulationComponent } from './components/offre/postulation/postulation.component';
import { AddoffreComponent } from './components/offre/addoffre/addoffre.component';
import {GridModule} from '@syncfusion/ej2-angular-grids';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {SchedulerModule} from './scheduler/scheduler.module';
import {DayPilotModule} from 'daypilot-pro-angular';
import { PostulerComponent } from './components/postuler/postuler.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { ProjectComponent } from './components/project/project.component';
import { ArchiveComponent } from './components/project/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddAddressesComponent,
    ListAddressesComponent,
    EditAddressesComponent,
    PageNotFoundComponent,
    ShowAddressesComponent,
    AddressComponent,
    ModalComponent,
    HomeComponent,
    DashboardComponent,
    PlanComponent,
    SignUpComponent,
    ProfilComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    QuestionComponent,
    SourceComponent,
    DocumentComponent,
    ListCondidatComponent,
    DashComponent,
    CategoriesComponent,
    OffreComponent,
    SearchComponent,
    ListoffComponent,
    SpecialiteComponent,
    ShowoffreComponent,
    EditoffreComponent,
    EditspeComponent,
    SupervisorComponent,
    CondidatureComponent,
    ShowuserComponent,
    PostulationComponent,
    AddoffreComponent,
    PostulerComponent,
    SidebarComponent,
    ProjectComponent,
    ArchiveComponent,
  ],
  imports: [
    SchedulerModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    GridModule,
    DayPilotModule,

    // ToastrModule added
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
