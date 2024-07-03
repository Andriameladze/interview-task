import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScFiveChildComponent } from '../sc-five-child/sc-five-child.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sc-five-parent',
  standalone: true,
  imports: [ScFiveChildComponent, CommonModule],
  templateUrl: './sc-five-parent.component.html',
  styleUrl: './sc-five-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFiveParentComponent {
  private parentData = new BehaviorSubject('John from Parent');
  data$ = this.parentData.asObservable();

  changeData() {
    this.parentData.next('George from Parent');
  }
}
