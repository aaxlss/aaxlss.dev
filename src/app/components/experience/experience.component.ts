import { Component, Input } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { Option } from '../../Interface';

@Component({
  selector: 'experience-component',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() time?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() skills?: Option[];
}
