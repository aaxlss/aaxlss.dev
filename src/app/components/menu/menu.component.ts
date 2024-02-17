import { Component, Input } from '@angular/core';
import { Option } from '../../Interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'menu-component',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menuOptions: Option[] = [];
}
