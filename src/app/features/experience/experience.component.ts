import { Component, Input } from '@angular/core';
import { SkillComponent } from '../../shared/components/skill/skill.component';
import { Option } from '../../core/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() time?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() skills?: Option[];
}