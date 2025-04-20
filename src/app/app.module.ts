import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
