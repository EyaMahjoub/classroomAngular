import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  classes: any[] = [];//hhhh
  cours: any[] = [];
  enseignant: any = null;
  selectedTab: string = 'flux';
  etudiants: any[] = [];
  selectedClasse: any = null;
  afficherDetails: boolean = false;
  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    const etudiantId = 1;//hhh
    this.classeService.getClassesEtudiant(etudiantId).subscribe(data => {
      this.classes = data;
    });

  }
  chargerCours(idClasse: number) {
    this.classeService.getCoursParClasse(idClasse).subscribe(data => {
      this.cours = data;
    });

  }
  chargerEnseignant(idClasse: number){
    this.classeService.getEnseignant(idClasse).subscribe(data=>{
      console.log('Données enseignant reçues :', data);
      this.enseignant=data[0];
    })
  }
  chargerEtudiant(idClasse:number){
    this.classeService.getEtudiant(idClasse).subscribe(data=>{
      console.log('Données etudiant reçues :', data);
      this.etudiants=data;
    })
  }
  chargerClasse(id: number) {
    this.chargerCours(id);
    this.chargerEnseignant(id);
    this.chargerEtudiant(id);
  }
  selectClasse(classe: any): void {
    this.selectedClasse = classe;
  console.log('afficher la classe',this.selectedClasse)}
}

