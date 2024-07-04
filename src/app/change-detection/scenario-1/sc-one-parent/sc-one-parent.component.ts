import { Component } from '@angular/core';
import { ScOneChildComponent } from '../sc-one-child/sc-one-child.component';

@Component({
  selector: 'app-sc-one-parent',
  standalone: true,
  imports: [ScOneChildComponent],
  templateUrl: './sc-one-parent.component.html',
  styleUrl: './sc-one-parent.component.scss',
})
export class ScOneParentComponent {
  parentData = { name: 'A' };

  changeData() {
    this.parentData.name = 'B';
  }
}
