import { Component, Input } from '@angular/core';
import { Option } from '../../../core/models';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() skillList?: Option[] = [];

  trackBySkill(index: number, skill: Option): string {
    return skill.label;
  }
}