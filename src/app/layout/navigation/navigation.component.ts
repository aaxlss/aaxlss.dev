import { Component, Input } from '@angular/core';
import { MenuOption } from '../../core/models';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() menuOptions: MenuOption[] = [];

  scrollToSection(option: MenuOption): void {
    if (option.sectionId) {
      const element = document.getElementById(option.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  trackByOption(index: number, option: MenuOption): string {
    return option.sectionId;
  }
}