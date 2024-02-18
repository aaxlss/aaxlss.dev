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
  constructor() {
    this.menuOptions = [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
      { label: 'Option 4' },
      { label: 'Option 5' },
    ];
  }
}
