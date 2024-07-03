import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sc-one-child',
  standalone: true,
  imports: [],
  templateUrl: './sc-one-child.component.html',
  styleUrl: './sc-one-child.component.scss',
})
export class ScOneChildComponent {
  @Input() childData = { name: '' };

  updateChild() {
    this.childData.name = 'C';
  }
}
