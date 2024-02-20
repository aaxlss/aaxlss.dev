import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from './components/skill/skill.component';
import { MenuComponent } from './components/menu/menu.component';
import { Experience, Option } from './Interface';
import { NgOptimizedImage } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';

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
  certifications: Experience[] = [];
  constructor() {
    this.menuOptions = [
      { label: 'ABOUT' },
      { label: 'EXPERIENCE' },
      { label: 'CERTIFICATIONS' },
      { label: 'EDUCATION' },
      { label: 'PROYECTS' },
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
    this.experience = [
      {
        time: '2022 - PRESENT',
        title: 'Software Engineer | Upland Alfity',
        description: `As a Full Stack developer, I specialize in both back-end and front-end development, with a focus on building and enhancing mobile applications for Android and React Native platforms. I am proficient in utilizing Git, GitHub, and Azure as software version controllers, while also implementing CI/CD processes through tools like Jenkins and Azure.
        I prioritize quality through unit testing, employing JUnit and PHPUnit. Collaborating closely with various departments, including cross-location teams, Quality Control, and fellow developers, I ensure streamlined internal processes and efficient task completion. Additionally, I take pride in my role as a mentor, providing training and guidance to new hires as well as mentoring senior and junior developers in their professional growth.`,
        skills: [
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
        ],
      },
    ];
    this.certifications = [
      {
        time: 'OCTOBER 2022',
        title: 'Microsoft Azure Fundamentals',
        description: 'nu4a-Dw8E',
      },
    ];
  }
}
