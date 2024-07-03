import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScFourChildComponent } from '../sc-four-child/sc-four-child.component';

@Component({
  selector: 'app-sc-four-parent',
  standalone: true,
  imports: [ScFourChildComponent],
  templateUrl: './sc-four-parent.component.html',
  styleUrl: './sc-four-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFourParentComponent {
  parentData = 'A';

  changeData() {
    this.parentData = 'B';
  }
}
