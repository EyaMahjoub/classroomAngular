import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' }, 
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscrire', component: InscrireComponent },
  { path: 'enseignant', component: EnseignantComponent },
  { path: 'classes', component: ClassListComponent },
  { path: 'etudiants', component: ListeEtudiantsComponent },

  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
