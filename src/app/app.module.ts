import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Ajouter FormsModule ici

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
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
import { UploadFichierComponent } from './upload-fichier/upload-fichier.component';
import { AjouterClasseComponent } from './ajouter-classe/ajouter-classe.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { AddDevoirComponent } from './add-devoir/add-devoir.component';
import { DevoirsComponent } from './devoirs/devoirs.component';

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
    HomeEnseignComponent,
    UploadFichierComponent,
    AjouterClasseComponent,
    AddCoursComponent,
    AddDevoirComponent,
    DevoirsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
      ReactiveFormsModule,// ✅ Doit être ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
