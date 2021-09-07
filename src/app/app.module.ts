import { JwtInterceptor } from './services/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

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
import { ChatComponent } from './chat/chat.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { BigprofileComponent } from './bigprofile/bigprofile.component';
import {MatCardModule} from '@angular/material/card';
import { DashSupervisorComponent } from './dash-supervisor/dash-supervisor.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TestComponent } from './test/test.component';
import { DashproComponent } from './dashpro/dashpro.component';
import { PowerBiComponent } from './power-bi/power-bi.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListSupervisorComponent } from './components/admin/list-supervisor/list-supervisor.component';
import { ListSocietyComponent } from './components/admin/list-society/list-society.component';
import {MatTreeModule} from '@angular/material/tree';
import { ListProjectComponent } from './list-project/list-project.component';
import { ListSubdiciplineComponent } from './list-subdicipline/list-subdicipline.component';
import { ListSpecialityComponent } from './list-speciality/list-speciality.component';
import { CondidateComponent } from './condidate/condidate.component';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {myRxStompConfig} from './my-rx-stomp.config';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserListComponent } from './chat/user-list/user-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MessageComponent } from './chat/message/message.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ApplicationComponent } from './application/application.component';

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
    ChatComponent,
    NewPlanComponent,
    BigprofileComponent,
    DashSupervisorComponent,
    FooterComponent,
    TestComponent,
    DashproComponent,
    PowerBiComponent,
    ListSupervisorComponent,
    ListSocietyComponent,
    ListProjectComponent,
    ListSubdiciplineComponent,
    ListSpecialityComponent,
    CondidateComponent,
    UserListComponent,
    MessageComponent,
    ApplicationComponent,
  ],
  imports: [
    SocialLoginModule,
    FontAwesomeModule,
    SchedulerModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    GridModule,
    DayPilotModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatTreeModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [{
    provide: InjectableRxStompConfig,
    useValue: myRxStompConfig
  },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    },{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '681209312875-drrb3j1rf3unkqid6oqukdk4pmhk7q5t.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('966540550860555')
        }
      ]
    } as SocialAuthServiceConfig,
  },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
