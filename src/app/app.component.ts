import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from './components/skill/skill.component';
import { MenuComponent } from './components/menu/menu.component';
import { Option } from './Interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkillComponent, MenuComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aaxlss.dev';
  menuOptions: Option[] = [];
  hardSkills: Option[] = [];
  constructor() {
    this.menuOptions = [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
      { label: 'Option 4' },
      { label: 'Option 5' },
    ];
    this.hardSkills = [
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
  }
}
