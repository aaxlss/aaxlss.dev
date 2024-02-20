import { Component, Input } from '@angular/core';
import { Option } from '../../Interface';

@Component({
  selector: 'skill-component',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skillList?: Option[] = [];
}
