import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThreeChildComponent } from '../sc-three-child/sc-three-child.component';

@Component({
  selector: 'app-sc-three-parent',
  standalone: true,
  imports: [ScThreeChildComponent],
  templateUrl: './sc-three-parent.component.html',
  styleUrl: './sc-three-parent.component.scss',
})
export class ScThreeParentComponent {
  parentData = { name: 'A' };

  parentDataPrimitive = 'John';

  changeData() {
    this.parentData.name = 'B';
  }

  changePrimitiveData() {
    this.parentDataPrimitive = 'George';
  }
}
