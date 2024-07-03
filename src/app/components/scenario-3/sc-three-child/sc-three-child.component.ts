import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sc-three-child',
  standalone: true,
  imports: [],
  templateUrl: './sc-three-child.component.html',
  styleUrl: './sc-three-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThreeChildComponent {
  @Input() childData = { name: '' };
  @Input() childDataPrimitive = '';

  updateChild() {
    this.childData.name = 'C';
  }
}
