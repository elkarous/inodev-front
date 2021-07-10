import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { ShowAddressesComponent } from './components/show-addresses/show-addresses.component';
import { ListAddressesComponent } from './components/list-addresses/list-addresses.component';
import {HomeComponent} from './components/home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PlanComponent} from './components/plan/plan.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProfilComponent} from './components/profil/profil.component';
import {EducationComponent} from './components/education/education.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {QuestionComponent} from './components/question/question.component';
import {SourceComponent} from './components/source/source.component';
import {DocumentComponent} from './components/document/document.component';
import {ListCondidatComponent} from './components/admin/list-condidat/list-condidat.component';
import {DashComponent} from './components/dash/dash.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {OffreComponent} from './components/offre/offre.component';
import {SearchComponent} from './components/search/search.component';
import {ListoffComponent} from './components/offre/listoff/listoff.component';
import {SpecialiteComponent} from './components/specialite/specialite.component';
import {ShowoffreComponent} from './components/offre/showoffre/showoffre.component';
import {EditoffreComponent} from './components/offre/editoffre/editoffre.component';
import {EditspeComponent} from './components/specialite/editspe/editspe.component';
import {SupervisorComponent} from './components/supervisor/supervisor.component';
import {CondidatureComponent} from './components/condidature/condidature.component';
import {ShowuserComponent} from './components/admin/showuser/showuser.component';
import {PostulationComponent} from './components/offre/postulation/postulation.component';
import {AddoffreComponent} from './components/offre/addoffre/addoffre.component';
import {PostulerComponent} from './components/postuler/postuler.component';
import {ProjectComponent} from './components/project/project.component';
import {ArchiveComponent} from './components/project/archive/archive.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'plan', component: PlanComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard]},
  { path: 'education', component: EducationComponent, canActivate: [AuthGuard]},
  { path: 'experience', component: ExperienceComponent, canActivate: [AuthGuard]},
  { path: 'question', component: QuestionComponent, canActivate: [AuthGuard]},
  { path: 'source', component: SourceComponent, canActivate: [AuthGuard]},
  { path: 'document', component: DocumentComponent, canActivate: [AuthGuard]},
  { path: 'dash', component: DashComponent, canActivate: [AuthGuard]},
  { path: 'categories/:id/:id1', component: CategoriesComponent, canActivate: [AuthGuard]},
  { path: 'user/:id/:id1', component: ShowuserComponent, canActivate: [AuthGuard]},
  { path: 'offre/:id/:id1', component: ShowoffreComponent, canActivate: [AuthGuard]},
  { path: 'offre/edit/:id/:id1', component: EditoffreComponent, canActivate: [AuthGuard]},
  { path: 'calendar/:id', component: AddoffreComponent, canActivate: [AuthGuard]},
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard]},
  { path: 'project/archive', component: ArchiveComponent, canActivate: [AuthGuard]},
  { path: 'postulation/:id', component: PostulationComponent, canActivate: [AuthGuard]},
  { path: 'specialite/:id', component: EditspeComponent, canActivate: [AuthGuard]},
  { path: 'search/:id/:id1/:id2/:id3', component: SearchComponent, canActivate: [AuthGuard]},
  { path: 'off/cat/:id', component: OffreComponent, canActivate: [AuthGuard]},
  { path: 'sup', component: SupervisorComponent, canActivate: [AuthGuard]},
  { path: 'postuler/:id/:id1', component: PostulerComponent, canActivate: [AuthGuard]},
  { path: 'listc', component: ListCondidatComponent, canActivate: [AuthGuard]},
  { path: 'myapplication', component: CondidatureComponent, canActivate: [AuthGuard]},
  { path: 'listspe', component: SpecialiteComponent, canActivate: [AuthGuard]},
  { path: 'listoff/:id', component: ListoffComponent, canActivate: [AuthGuard]},
  { path: 'listAdresse', component: ListAddressesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'addresses', children: [

     { path: 'create', component: AddAddressesComponent },
     { path: '{id}/edit', component: ListAddressesComponent },
     { path: '{id}', component: ShowAddressesComponent },
    ], canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent, canActivate: [AfterAuthGuard] },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
