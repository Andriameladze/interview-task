import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sc-two-child',
  standalone: true,
  imports: [],
  templateUrl: './sc-two-child.component.html',
  styleUrl: './sc-two-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTwoChildComponent {
  @Input() childData = { name: '' };

  updateChild() {
    this.childData.name = 'C';
  }
}
