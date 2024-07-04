import { Component } from '@angular/core';
import { DiTwoParentComponent } from '../di-two-parent/di-two-parent.component';
import { DiTwoSiblingComponent } from '../di-two-sibling/di-two-sibling.component';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [DiTwoParentComponent, DiTwoSiblingComponent],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss',
})
export class DashComponent {}
