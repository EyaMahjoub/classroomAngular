import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { DetailsClasseComponent } from './details-classe/details-classe.component';
import { HomeEnseignComponent } from './home-enseign/home-enseign.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ConnexionComponent,
    EnseignantComponent,
    NotFoundComponent,
    InscrireComponent,
    ClassListComponent,
    ListeEtudiantsComponent,
    ListeCoursComponent,
    DetailsClasseComponent,
    HomeEnseignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
