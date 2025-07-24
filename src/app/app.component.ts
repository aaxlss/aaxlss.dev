import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from './components/skill/skill.component';
import { MenuComponent } from './components/menu/menu.component';
import { Experience, Option } from './Interface';
import { NgOptimizedImage } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';

import experience from '../assets/information/experience.json';
import education from '../assets/information/education.json';
import certifications from '../assets/information/certifications.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SkillComponent,
    MenuComponent,
    NgOptimizedImage,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aaxlss.dev';
  menuOptions: Option[] = [];
  hardSkills: Option[] = [];
  experience: Experience[] = [];
  education: Experience[] = [];
  certifications: Experience[] = [];
  constructor() {
    this.menuOptions = [
      { label: 'ABOUT', sectionId: 'about' },
      { label: 'EXPERIENCE', sectionId: 'experience' },
      { label: 'CERTIFICATIONS', sectionId: 'certifications' },
      { label: 'EDUCATION', sectionId: 'education' },
      { label: 'PROYECTS', sectionId: 'projects' },
    ];
    this.hardSkills = [
      { label: 'SalesForce' },
      { label: 'Angular' },
      { label: 'Laravel' },
      { label: 'Yii2' },
      { label: 'ECMAScript 6' },
      { label: 'React Js' },
      { label: 'React Native' },
      { label: 'Azure' },
      { label: 'Postman' },
      { label: 'Android' },
      { label: 'Java' },
      { label: 'Kotlin' },
      { label: 'PHP' },
      { label: 'CSS' },
      { label: 'HTML' },
      { label: 'Python' },
      { label: 'CI/CD' },
      { label: 'MongoDB' },
      { label: 'PostgreSQL' },
      { label: 'MySQL' },
      { label: 'Git' },
      { label: 'Trello' },
      { label: 'Jira' },
    ];
    this.experience = experience;
    this.education = education;
    this.certifications = certifications;
  }
}
