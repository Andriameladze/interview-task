import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sc-four-child',
  standalone: true,
  imports: [],
  templateUrl: './sc-four-child.component.html',
  styleUrl: './sc-four-child.component.scss',
})
export class ScFourChildComponent {
  @Input() childData = '';

  updateChild() {
    this.childData = 'C';
  }
}
