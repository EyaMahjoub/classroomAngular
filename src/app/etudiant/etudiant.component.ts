import { Component, OnInit } from '@angular/core';
interface Course {
  id: number;
  name: string;
  teacher: string;
  progress: number;
}

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'completed';
}

interface Activity {
  id: number;
  type: 'announcement' | 'material';
  teacher: string;
  teacherImage: string;
  title: string;
  content: string;
  timestamp: string;
  attachments?: { name: string; type: string }[];
}
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  courses: Course[] = [
    { id: 1, name: 'Mathématiques', teacher: 'M. Dupont', progress: 75 },
    { id: 2, name: 'Physique', teacher: 'Mme. Martin', progress: 60 },
    { id: 3, name: 'Informatique', teacher: 'M. Dubois', progress: 90 }
  ];

  assignments: Assignment[] = [
    { id: 1, title: 'Exercices de mathématiques', course: 'Mathématiques', dueDate: '15/03/2024', status: 'pending' },
    { id: 2, title: 'Rapport de physique', course: 'Physique', dueDate: '20/03/2024', status: 'pending' },
    { id: 3, title: 'Projet de programmation', course: 'Informatique', dueDate: '25/03/2024', status: 'completed' }
  ];

  activities: Activity[] = [
    {
      id: 1,
      type: 'announcement',
      teacher: 'Professeur Dupont',
      teacherImage: 'assets/img/team-1.jpg',
      title: 'Devoir de mathématiques',
      content: 'N\'oubliez pas de rendre votre devoir avant vendredi prochain.',
      timestamp: 'Il y a 2 heures'
    },
    {
      id: 2,
      type: 'material',
      teacher: 'Professeur Martin',
      teacherImage: 'assets/img/team-2.jpg',
      title: 'Nouveau matériel de cours',
      content: 'J\'ai ajouté de nouvelles ressources pour le prochain chapitre.',
      timestamp: 'Hier',
      attachments: [
        { name: 'Cours.pdf', type: 'pdf' },
        { name: 'Exercices.doc', type: 'word' }
      ]
    }
  ];

  selectedCourse: Course | null = null;
  constructor() { }

  ngOnInit(): void {
    this.selectedCourse = this.courses[0];
  }
selectCourse(course: Course): void {
  this.selectedCourse = course;
}

getCourseAssignments(courseName: string): Assignment[] {
  return this.assignments.filter(assignment => assignment.course === courseName);
}

getCourseActivities(courseName: string): Activity[] {
  return this.activities.filter(activity => 
    activity.title.toLowerCase().includes(courseName.toLowerCase())
  );
}
}
