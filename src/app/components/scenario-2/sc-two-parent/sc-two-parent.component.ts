import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTwoChildComponent } from '../sc-two-child/sc-two-child.component';

@Component({
  selector: 'app-sc-two-parent',
  standalone: true,
  imports: [ScTwoChildComponent],
  templateUrl: './sc-two-parent.component.html',
  styleUrl: './sc-two-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTwoParentComponent {
  parentData = { name: 'A' };

  changeData() {
    this.parentData.name = 'B';
  }
}
